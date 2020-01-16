import * as gcm from 'node-gcm';
import * as dotenv from 'dotenv';
dotenv.config();

class GcmHelper {
    private static sender: any = new gcm.Sender(process.env.FIREBASE_TOKEN);

    static sendMail(oId: string, deviceId: string, messageBody: string) {
        var message = new gcm.Message({
            notification: {
                title: 'STAR Maths Online',
                body: messageBody
            },
            data: {
                notificationID: oId
            }
        });
        this.sender.sendNoRetry(message, deviceId, (err, response) => {
            if (err) console.log(err);
            console.log(response);
        });
    }
}

export default GcmHelper;