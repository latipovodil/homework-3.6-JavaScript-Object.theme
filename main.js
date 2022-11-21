const malibu = {
  model: "Model: " + "malibu",
  color: "Rangi: " + "black",
  number: "Nomeri: " + "ZZZ 777",
  condition: "Holati: " + "New",
  motor: {
    condition: "Motor: " + "turbo",
    speed: "Tezlik: " + 300,
  },
  petrol: "Benzin: " + 92,
  tanning: "Tuining: " + "mega tuining",
  discount: "Chegirma yoki sovg'a: " + "++trablazer",
  price: "Narxi: " + "malibu = 99.990(sum))",
  address: "Olib ketish manzili: " + "Amerika", 
  planeFinancing: "Rastamochka + samalyotga ketadigan pul: " + "9 999 9999.990$"
}


let maqsad = prompt("Siz mashina sotib olmoqchimisiz yoki sotmoqchimisiz(sotaman: 0; olaman: 1)")

if (maqsad == true) {
  document.write(malibu.model + "<br>" + malibu.color + "<br>" + malibu.number + "<br>" + malibu.condition + "<br>" + malibu.motor.condition + "<br>" + malibu.motor.speed + "<br>" + malibu.petrol + "<br>" + malibu.tanning + "<br>" + malibu.discount + "<br>" + malibu.price + "<br>" + malibu.address + "<br>" + malibu.planeFinancing)
}

else {
  model = prompt("Mashinangizni modelini kiriting")
  color = prompt("rangini kiriting")
  number = prompt("nomerini koriting yoki numersiz sotsangiz no so'zini yozing")
  condition = prompt("Holatini kiriting yangi/eski")
  motorCondition = prompt("motor holatini kiriting oddiy/turbo")
  motorSpeed = prompt("motor oxirgi tezligini kiriting")
  petrol = prompt("nechchi benzin yoqishini kiriting eng past darajada 92/84")
  tanning = prompt("tuining qilinganmi")
  discount = prompt("chegirma sifatida nima berasiz")
  price = prompt("narxini kiriting")
  address = prompt("olib ketish manzilini kiriting")
  money = prompt("yo'l harajatlarini qoplab berasizmi")

}


let car = {
  model: "Model: " + model,
  color: "Rangi: " + color,
  number: "Nomeri: " + number,
  condition: "Holati: " + condition,
  motor: {
    condition: "Motor: " + motorCondition,
    speed: "Tezlik: " + motorSpeed,
  },
  petrol: "Benzin: " + petrol,
  tanning: "Tuining: " + tanning,
  discount: "Chegirma yoki sovg'a: " + discount,
  price: "Narxi: " + price,
  address: "Olib ketish manzili: " + address,
  money: "Olib ketishga ketadiga pul qoplab beriladimi: " + money,
}

if (maqsad == false) {
  document.write(+ "<br>" + car.color + "<br>" + car.number + "<br>" + car.condition + "<br>" + car.motor.condition + "<br>" + car.motor.speed + "<br>" + car.petrol + "<br>" + car.tanning + "<br>" + car.discount + "<br>" + car.price + "<br>" + car.address + "<br>" + car.money)
}

