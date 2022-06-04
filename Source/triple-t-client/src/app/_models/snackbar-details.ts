export interface SnackBarDetailsModel {
    message: string;
    mode: SnackBarServiceMode;
    horizontalPosition: SnackBarHorizontalPosition;
    verticalPosition: SnackBarVerticalPosition;
    time: number;
}

export declare type SnackBarHorizontalPosition = "start" | "center" | "end" | "left" | "right";
export declare type SnackBarVerticalPosition = "top" | "bottom";
export declare type SnackBarServiceMode = "Info" | "Success" | "Warn" | "Error";