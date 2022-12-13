# optimacros-client

## install

```
git clone git@github.com:asnikitin/optimacros-client.git
cd optimacros-client
npm i
```

## utilize API

to find items sorted by `price` (brand, name, year, price are available)

```
npm start findAll price
```

to find by `id`

```
npm start findOne 63989a9a70db2e630fe5f67f
```

to update by `id` set `brand, model, year, price`

```
npm start update 63987b04ecac9269ff826a9b bmw 130 2010 11000
```

to create item `brand, model, year, price`

```
npm start create bmw 320 2015 11000
```

to delete by `id`

```
npm start delete 63987b04ecac9269ff826a9c
```
