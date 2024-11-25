export const dateStringToDate = (dateString: string): Date => {
    const dataParts = dateString
        .split('/')
        .map((value: string): number => {
            return parseInt(value);
    })

    return new Date(dataParts[2], dataParts[1] -1, dataParts[0]);
}