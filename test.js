
/* quiz 1번 */
/*
let product = {
    이름: 'Nature of Code',
    가격: 30000,
    저자: '다니엘 쉬프만',
    ISBN: '9788968481901',
    페이지수: 620
};

/* 출력 예시 */
/*
console.log(product);


/* quiz 2번 */
/*
let train = [
    {구분: '직통', 열차번호: 'KTX 061', 출발: '서울 19:37', 도착: '부산 22:09', 소요시간: '02:32'},
    {구분: '직통', 열차번호: 'KTX 063', 출발: '서울 20:00', 도착: '부산 22:37', 소요시간: '02:37'},
    {구분: '직통', 열차번호: '1013', 출발: '서울 20:25', 도착: '부산 00:57', 소요시간: '04:32'},
    {구분: '직통', 열차번호: 'KTX 065', 출발: '서울 20:30', 도착: '부산 22:45', 소요시간: '02:15'},
    {구분: '직통', 열차번호: 'KTX 109', 출발: '서울 20:50', 도착: '부산 23:51', 소요시간: '03:01'},
    {구분: '직통', 열차번호: 'KTX 067', 출발: '서울 21:00', 도착: '부산 23:39', 소요시간: '02:39'},
    {구분: '직통', 열차번호: 'KTX 069', 출발: '서울 21:30', 도착: '부산 00:16', 소요시간: '02:46'},
    {구분: '직통', 열차번호: 'KTX 111', 출발: '서울 21:35', 도착: '부산 00:39', 소요시간: '03:04'},
    {구분: '직통', 열차번호: 'KTX 071', 출발: '서울 22:00', 도착: '부산 00:33', 소요시간: '02:33'},
    {구분: '직통', 열차번호: 'KTX 073', 출발: '서울 22:30', 도착: '부산 01:03', 소요시간: '02:33'} 
];

/* 출력 예시 */
/*
function printProduct(trains)
{
    console.log(`${trains.열차번호}의 출발 시간은 ${trains.출발}입니다.`);
}

for (let trains of train)
{
    printProduct(trains)
}

*/


/* quiz 3번 */
function Product(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
}

Product.prototype.calculate = function (_weight) {
    console.log(`'고기의 가격은 ${_weight / this.weight * this.price}원 입니다.'`);
}

let products = new Product('돼지삼겹살', 100, 1690);

/* 출력 예제  */
products.calculate(200);