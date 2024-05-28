const Messages = require('../Models/Messages');
const Conversations = require('../Models/Conversations');
const { EmployeeModel } = require('../Models/Employee');

const sendMessage = async (req, res) => {
    try {
        const { conversationId, senderId, message, receiverId } = req.body;

        if (!senderId || !message) {
            return res.status(400).json({ error: 'Please fill all required fields' });
        }

        if (conversationId === 'new' && receiverId) {
            const newConversation = new Conversations({ members: [senderId, receiverId] });
            await newConversation.save();

            const newMessage = new Messages({
                conversationId: newConversation._id,
                senderId,
                message
            });
            await newMessage.save();

            return res.status(200).json({ message: 'Message sent successfully' });
        } else if (!conversationId) {
            return res.status(400).json({ error: 'Please provide a conversation ID or receiver ID' });
        }

        const newMessage = new Messages({
            conversationId,
            senderId,
            message
        });
        await newMessage.save();

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'An error occurred while sending the message' });
    }
};

const getMessages = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const { senderId, receiverId } = req.query;

        console.log('Fetching messages for conversationId:', conversationId);
        console.log('Query params - senderId:', senderId, 'receiverId:', receiverId);

        if (!conversationId) {
            console.log('Conversation ID is missing');
            return res.status(400).json({ message: 'Conversation ID is required' });
        }

        const messages = await Messages.find({ conversationId });
        console.log('Messages found:', messages);

        const messagesWithUserData = await Promise.all(messages.map(async (message) => {
            const user = await EmployeeModel.findById(message.senderId); // Use EmployeeModel here
            if (!user) {
                console.log(`User not found for senderId: ${message.senderId}`);
                return { ...message.toObject(), sender: null };
            }
            return {
                ...message.toObject(),
                sender: { _id: user._id, email: user.email, FirstName: user.FirstName }
            };
        }));

        res.status(200).json(messagesWithUserData);
    } catch (error) {
        console.error('Error fetching messages:', error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { sendMessage, getMessages };
