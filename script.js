const blueberry = 15.678;
const watermelon = 123.965;
const coconut = 90.2345;
const fruitArray = [blueberry, watermelon, coconut];
const maxPrice = Math.max (blueberry, watermelon, coconut);
document.write ("Максимальна ціна: " + maxPrice + "<br/><br/>");
const minPrice = Math.min (blueberry, watermelon, coconut);
document.write ("Мінімальна ціна: " + minPrice + "<br/><br/>");
const sumPrice = blueberry + watermelon + coconut;
document.write ("Сума цін: " + sumPrice + "<br/><br/>");
const blueberryInteger = Math.floor (blueberry);
const watermelonInteger = Math.floor (watermelon);
const coconutInteger = Math.floor (coconut);
const integerSum = blueberryInteger + watermelonInteger + coconutInteger;
document.write ("Сума цілих частин: " + integerSum + "<br/><br/>");
const topSum = Math.ceil (integerSum / 100) * 100;
document.write ("Заокруглена сума: " + topSum + "<br/><br/>");
let parityСheck;
if (integerSum % 2 == 0) {
  parityСheck = "Pair number"
} else {
  parityСheck = "Unpaired number"
}
document.write ("Парне чи непарне число: " + parityСheck + "<br/><br/>");
const payment = 500;
const remainder = payment - sumPrice;
document.write ("Решта з 500 грн: " + remainder + "<br/><br/>");
const average = sumPrice / fruitArray.length;
const averageRounded = Math.floor (average * 100) / 100;
document.write ("Середня сума, округлена до 2-го знаку після коми: " + averageRounded + "<br/><br/>");
const discount = Math.floor (Math.random() * 100);
document.write ("Сума знижки: " + discount + "%" + "<br/><br/>");
const discountPrice = (sumPrice * discount) / 100;
let cash = Math.floor ((sumPrice - discountPrice) * 100) / 100;
document.write ("Оплата зі знижкою: " + cash + "<br/><br/>");
const cost = sumPrice / 2;
document.write ("Собівартість: " + cost + "<br/><br/>");
const profit = Math.floor ((cost - discountPrice) *100) / 100;
document.write ("Чистий прибуток: " + profit + "<br/><br/>");


let priceBox = document.querySelector(".price");
priceBox.innerHTML =
`
<p>Максимальна ціна: ${maxPrice}</p>
<p>Мінімальна ціна: ${minPrice}</p>
<p>Сума цін: ${sumPrice}</p>
<p>Сума цілих частин: ${integerSum} </p>
<p>Заокруглена сума: ${topSum}</p>
<p>Парне чи непарне число: ${parityСheck}</p>
<p>Решта з 500 грн: ${remainder}</p>
<p>Середня сума, округлена до 2-го знаку після коми: ${averageRounded}</p>
<p>Сума знижки: ${discount}%</p>
<p>Оплата зі знижкою: ${cash}</p>
<p>Собівартість: ${cost}</p>
<p>Чистий прибуток: ${profit}</p>
`;
