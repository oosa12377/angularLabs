interface product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

function logProduct(product: product): void {
  console.log(`id: ${product.id}`);
  console.log(`name: ${product.name}`);
  console.log(`price: ${product.price}`);
  console.log(`in stock: ${product.inStock}`);
}
const book: product = {
  id: 1,
  name: "linux basics",
  price: 30,
  inStock: true,
};
logProduct(book);

type ProductOrError = product | string;

function wrapValue<T>(value: T): T[] {
  return [value];
}
console.log(wrapValue("hello world"));

interface ApiResult<T> {
  data: T;
  success: boolean;
  message: string;
}

function printProductIfSuccess(result: ApiResult<product>): void {
  if (result.success) {
    logProduct(result.data);
  } else {
    console.log("Error:", result.message);
  }
}
let apiResponse: ApiResult<product> = {
  data: book,
  success: true,
  message: "from api",
};
printProductIfSuccess(apiResponse);
