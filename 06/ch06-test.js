class Student{
    constructor(SId, name, Major, tel){
        this.SId = SId;
        this.name = name;
        this.Major = Major;
        this.tel = tel;
    }

    print(){
        console.log(`학번이 ${this.SId}의 이름은 ${this.name}이고, 전공은 ${this.Major}이고, 전화번호는${this.tel}입니다.`)
    }
}

let school = [
    new Student(3109, '임수연', "소프트웨어", '010-7925-1705'),
    new Student(3108, '수연임', "디자인", '010-5345-4354'),
    new Student(3107, '졸리다', "웹솔루션", '010-354-1278'),
    new Student(3106, '힘들다', "소프트웨어", '010-7866-2274'),
    new Student(3105, '집갈래', "디자인", '010-5345-3545'),

];

function print(school){
    console.log(`학번이 ${school.SId}의 이름은 ${school.name}이고, 전공은 ${school.Major}이고, 전화번호는${school.tel}입니다 print`)
};

for(const key in school){
    console.log(school[key].SId + "\t" + school[key].name+ "\t" + school[key].Major+ "\t" + school[key].tel + "in");
}

for(let index =0; index < school.length; index++){
    console.log(school[index].SId + "\t" + school[index].name+ "\t" + school[index].Major+ "\t" + school[index].tel + "for");
}

school.forEach(e =>{
    console.log(e.SId + "\t" + e.name + "\t" + e.Major + "\t" + e.tel + "each")
})

for(const student of school){
    print(student);
}