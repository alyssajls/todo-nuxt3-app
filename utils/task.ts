
export class Taskcard {
    title: string = ''
    description : string = ''
    date : string = ''

    // Having「!」mark after 'date', Not initialized, but no error
    // 最初はdateの初期値分からなかったので、「！」で対応してた。これでerrorの表示はでない
    // date! : Date  
    
    // Todo
    // TaskCard クラスに「タスクが完了済かどうか」を表す isCompleted クラスを作成する。 データ型は boolean で初期値は false 
    isCompleted: boolean = false;
}
