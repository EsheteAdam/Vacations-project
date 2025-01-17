import { Notyf } from 'notyf';


class Notify {
    private notification = new Notyf({ duration: 5000, position: { x: "left", y: "bottom" } })

    public success(message: string) {
        this.notification.success(message)
    }

    public error(message: string) {
        this.notification.error(message)
    }
}

const notify = new Notify();
export default notify