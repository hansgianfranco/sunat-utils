# sunat-utils

[![npm version](https://img.shields.io/npm/v/sunat-utils)](https://www.npmjs.com/package/sunat-utils)
[![npm downloads](https://img.shields.io/npm/dt/sunat-utils)](https://www.npmjs.com/package/sunat-utils)
[![bundle size](https://img.shields.io/bundlephobia/minzip/sunat-utils)](https://bundlephobia.com/package/sunat-utils)
![Security](https://img.shields.io/badge/security-policy-blue)

Utilidades modernas para trabajar con datos de SUNAT en Perú usando JavaScript y TypeScript.

---

## ✨ Características

* Validación de RUC (módulo 11)
* Validación de DNI y CE
* Detección de tipo de contribuyente
* Cálculo de IGV (agregar, remover, breakdown)
* Cálculo de detracciones
* Normalización de inputs (RUC/DNI)
* Catálogos SUNAT tipados
* Formateo de moneda (PEN)
* TypeScript nativo

---

## 📦 Instalación

```bash
npm install sunat-utils
```

---

## 🚀 Uso

```ts
import {
  isValidRUC,
  isValidDNI,
  isValidCE,
  getRUCType,
  addIGV,
  removeIGV,
  getIGVBreakdown,
  calculateDetraction,
  normalizeRUC,
  formatCurrency,
  getDocumentName
} from "sunat-utils";

// Validaciones
isValidRUC("20100070970"); // true
isValidDNI("12345678"); // true
isValidCE("ABC123456"); // true

// Tipo de RUC
getRUCType("20100070970"); // "empresa"

// IGV
addIGV(100); // 118
removeIGV(118); // 100

getIGVBreakdown(118);
// { net: 100, igv: 18, total: 118 }

// Detracciones
calculateDetraction(1000, "transporte");
// { rate: 0.04, detraction: 40, net: 960 }

// Normalización
normalizeRUC("20-12345678-9"); // "20123456789"

// Formato
formatCurrency(1200); // "S/ 1,200.00"

// Catálogos
getDocumentName("01"); // "Factura"
```

---

## 📚 API

### 🔍 Validadores

#### `isValidRUC`

Valida un RUC peruano usando módulo 11 y prefijos válidos.

```ts
isValidRUC(ruc: string): boolean
```

#### `isValidDNI`

```ts
isValidDNI(dni: string): boolean
```

#### `isValidCE`

```ts
isValidCE(ce: string): boolean
```

---

### 🏢 RUC

#### `getRUCType`

```ts
getRUCType(ruc: string): 
  | "persona_natural"
  | "empresa"
  | "entidad_publica"
  | "otro"
  | null
```

#### `calculateRUCDigit`

```ts
calculateRUCDigit(base: string): number
```

---

### 💰 Impuestos

#### `addIGV`

```ts
addIGV(amount: number): number
```

#### `removeIGV`

```ts
removeIGV(amount: number): number
```

#### `getIGVBreakdown`

```ts
getIGVBreakdown(amount: number): {
  net: number;
  igv: number;
  total: number;
}
```

#### `calculateDetraction`

```ts
calculateDetraction(
  amount: number,
  type: "transporte" | "servicios" | "construccion"
): {
  rate: number;
  detraction: number;
  net: number;
}
```

---

### 🧹 Normalización

#### `normalizeRUC`

```ts
normalizeRUC(input: string): string
```

#### `normalizeDNI`

```ts
normalizeDNI(input: string): string
```

---

### 🏷️ Catálogos

#### `DOCUMENT_TYPES`

Catálogo de tipos de comprobantes SUNAT.

#### `getDocumentName`

```ts
getDocumentName(type: string): string
```

---

### 💵 Formato

#### `formatCurrency`

```ts
formatCurrency(amount: number): string
```

---

## 🧪 Tests

Este proyecto usa el runner nativo de Node.js (`node:test`).

```bash
npm run build
npm test
```

---

## 📜 Changelog

Ver historial de cambios en [CHANGELOG.md](CHANGELOG.md)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas 🙌

Revisa:

* [CONTRIBUTING.md](CONTRIBUTING.md)
* [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

---

## 🔐 Seguridad

Si encuentras una vulnerabilidad, revisa:

* [SECURITY.md](SECURITY.md)

---

## ⚠️ Disclaimer

Esta librería no es oficial ni está afiliada a ninguna entidad del Estado.
Es una herramienta independiente para facilitar el desarrollo en Perú.

No garantiza cumplimiento legal ante auditorías.
Siempre valida resultados con un profesional contable.

---

## 📄 Licencia

MIT

---

## 👨‍💻 Autor

Franco Caballero
