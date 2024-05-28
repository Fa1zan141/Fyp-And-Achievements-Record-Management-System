const Conversations = require('../Models/Conversations');
const Employee = require('../Models/Employee').EmployeeModel;

const createConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        if (!senderId || !receiverId) {
            return res.status(400).json({ message: 'Sender ID and Receiver ID are required' });
        }

        const newConversation = new Conversations({ members: [senderId, receiverId] });
        await newConversation.save();
        
        res.status(200).json({ message: 'Conversation created successfully', conversationId: newConversation._id });
    } catch (error) {
        console.error('Error creating conversation:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getUserConversations = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const conversations = await Conversations.find({ members: { $in: [userId] } });
        
        const conversationUserData = await Promise.all(conversations.map(async (conversation) => {
            const receiverId = conversation.members.find((member) => member !== userId);
            const user = await Employee.findOne({ _id: receiverId });
            if (!user) {
                return { user: null, conversationId: conversation._id };
            }
            return { user: { receiverId: user._id, email: user.email, FirstName: user.FirstName }, conversationId: conversation._id };
        }));

        res.status(200).json(conversationUserData);
    } catch (error) {
        console.error('Error fetching user conversations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createConversation, getUserConversations };
