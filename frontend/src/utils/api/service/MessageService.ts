import http from '../BookfaceApi'
import {MessageDataObject, CreateMessageObject, Message} from '../../interfaces/MessageData'

const messageUrl = '/messages'
const searchMessage = '/searchMessage'

const MessageService = {
    createNewMessage: (newMessagePayload: Message) => {
        return http.post(messageUrl, newMessagePayload)
    },

    getMessages: () => {
        return http.get<MessageDataObject[]>(messageUrl)
    },

    getMessageWithQuery: () => {
        return http.get<MessageDataObject>(`${messageUrl}${searchMessage}`)
    },

    updateMessage: (id: string, messagePayload: CreateMessageObject) => {
        return http.put(`${messageUrl}/${id}`, messagePayload)
    },

    deleteMessage: (id: string) => {
        return http.delete(`${messageUrl}/${id}`)
    }
}

export default MessageService