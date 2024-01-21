class EmailNotification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

const test1 = new EmailNotification("1", "10-october-2023","this is a test", "test1@gmail.com")
test1.send();

const test2 = new SMSNotification("2","11-october-2023", "this is test2", "0xx-xxx-xxxx")
test2.send();
