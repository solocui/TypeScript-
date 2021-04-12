function showDetail(humans) {
    let count = 0;
    let ulHTML = "<ul>";
    for (let human of humans) {
        let hi = "<li>" + human.firstName + " " + human.lastName + " 年龄为：" + human.age + "岁。</li> \n";
        console.log(hi);
        count++;
        ulHTML += hi;
    }
    let sumMsg = "<h3>共计人数为：" + count + "位。</h3>";
    console.log(sumMsg);
    ulHTML += sumMsg;
    return ulHTML;
}
