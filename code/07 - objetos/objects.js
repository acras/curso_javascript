var person = {fullName: 'Mark Andreessen', nationality: 'North American'}

person2 = Object.defineProperty(
  person,
  'company',
  {writable: true,
  enumerable: false,
  configurable: true}
)

person2.company = 'HotSoft'

console.log(person2)
console.log(person2.company)
