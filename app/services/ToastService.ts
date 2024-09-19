const toastId = "protocol-toast-id";
const toastTimeout = 3000;

const colorToastSuccess = "green";
const colorToastError = "red";
const colorToastWarning = "yellow";
const colorToastInfo = "blue";
const colorToastNotify = "gray";

export default class ToastService {

    private toast: any;
    private id: string;
    private timeout: number;
    private countToast: number = 0;

    constructor() {
        this.toast = useToast();
        this.id = toastId;
        this.timeout = toastTimeout;
    }

    private getToastId() {
        this.countToast++;
        return `${this.id}-${this.countToast}`;
    }

    public success(
        description: string,
        title: string = "Sucesso",
        icon: string = "material-symbols:check-circle",
        actions: any[] = [],
        click: any = null,
        callback: any = null
    ) {
        this.toast.add({
            id: this.getToastId(),
            title,
            description,
            icon,
            actions,
            click,
            callback,
            color: colorToastSuccess,
            timeout: this.timeout,
        });
    }

    public error(
        description: string,
        title: string = "Erro",
        icon: string = "material-symbols:dangerous",
        actions: any[] = [],
        click: any = null,
        callback: any = null
    ) {
        this.toast.add({
            id: this.getToastId(),
            title,
            description,
            icon,
            actions,
            click,
            callback,
            color: colorToastError,
            timeout: this.timeout
        });
    }

    public warning(
        description: string,
        title: string = "Atenção",
        icon: string = "material-symbols:warning",
        actions: any[] = [],
        click: any = null,
        callback: any = null
    ) {
        this.toast.add({
            id: this.getToastId(),
            title,
            description,
            icon,
            actions,
            click,
            callback,
            color: colorToastWarning,
            timeout: this.timeout
        });
    }

    public info(
        description: string,
        title: string = "Informação",
        icon: string = "material-symbols:info",
        actions: any[] = [],
        click: any = null,
        callback: any = null
    ) {
        this.toast.add({
            id: this.getToastId(),
            title,
            description,
            icon,
            actions,
            click,
            callback,
            color: colorToastInfo,
            timeout: this.timeout
        });
    }

    public notify(
        description: string,
        title: string = "Notificação",
        icon: string = "material-symbols:notifications",
        actions: any[] = [],
        click: any = null,
        callback: any = null
    ) {
        this.toast.add({
            id: this.getToastId(),
            title,
            description,
            icon,
            actions,
            click,
            callback,
            color: colorToastNotify,
            timeout: this.timeout
        });
    }
}
