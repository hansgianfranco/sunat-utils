# Changelog

All notable changes to this project will be documented in this file.

## [1.2.1] - 2026-05-01

### Fixed
- Validación de CE ahora permite números puros (el formato común de 9 dígitos).
- Exportaciones faltantes agregadas en `index.ts` (`calculateIGVRate`, `splitIGV`, `netToGross`, `grossToNet`, `formatInvoiceNumber`).

---

## [1.2.0] - 2026-04-15

### Added
- Nuevos tipos de documentos SUNAT (catálogo básico)
- Función `getDocumentName` con fallback seguro

### Improved
- Validación de RUC más robusta
- Mejoras en cálculo de dígito verificador
- Refactor de exports (sin barrels)

### Fixed
- Correcciones en tests de RUC
- Mejora en consistencia de tipos
- Correcciones menores en validadores
---

## [1.0.0] - 2026-04-14

### 🎉 Initial release

### ✨ Added
- Funciones básicas de IGV:
  - `addIGV`
  - `removeIGV`
  - `getIGVBreakdown`
- Cálculo de detracciones (`calculateDetraction`)
- Formateo de moneda (`formatCurrency`)
- Configuración inicial del proyecto
- Soporte TypeScript
