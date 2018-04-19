export class CardInfoModel {
    title: string;
    icon: string;
    where?: string;
    description?: string;

    constructor(title: string, icon: string, where?: string, description?: string) {
        this.title = title;
        this.icon = icon;
        this.where = where;
        this.description = description;
    }
}