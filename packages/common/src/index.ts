import { PDFME_VERSION } from './version.js';
import {
  MM_TO_PT_RATIO,
  PT_TO_MM_RATIO,
  PT_TO_PX_RATIO,
  BLANK_PDF,
  BLANK_A4_PDF,
  CUSTOM_A4_PDF,
  ZOOM,
  DEFAULT_FONT_NAME,
} from './constants.js';
import type {
  ChangeSchemaItem,
  ChangeSchemas,
  SchemaPageArray,
  PropPanel,
  PropPanelSchema,
  PropPanelWidgetProps,
  PDFRenderProps,
  Mode,
  UIRenderProps,
  Plugin,
  Lang,
  Dict,
  Size,
  Schema,
  SchemaForUI,
  Font,
  ColorType,
  BasePdf,
  BlankPdf,
  CustomPdf,
  Template,
  CommonOptions,
  GeneratorOptions,
  Plugins,
  PluginRegistry,
  GenerateProps,
  UIOptions,
  UIProps,
  PreviewProps,
  DesignerProps,
} from './types.js';
import {
  cloneDeep,
  getFallbackFontName,
  getDefaultFont,
  getB64BasePdf,
  b64toUint8Array,
  checkFont,
  checkInputs,
  checkUIOptions,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
  mm2pt,
  pt2mm,
  pt2px,
  px2mm,
  isHexValid,
  getInputFromTemplate,
  isBlankPdf,
} from './helper.js';
import { getDynamicTemplate } from './dynamicTemplate.js';
import { replacePlaceholders } from './expression.js';
import { pluginRegistry } from './pluginRegistry.js';

export {
  PDFME_VERSION,
  MM_TO_PT_RATIO,
  PT_TO_MM_RATIO,
  PT_TO_PX_RATIO,
  BLANK_PDF,
  BLANK_A4_PDF,
  CUSTOM_A4_PDF,
  ZOOM,
  DEFAULT_FONT_NAME,
  cloneDeep,
  getFallbackFontName,
  getDefaultFont,
  getB64BasePdf,
  b64toUint8Array,
  mm2pt,
  pt2mm,
  pt2px,
  px2mm,
  isHexValid,
  getInputFromTemplate,
  isBlankPdf,
  getDynamicTemplate,
  replacePlaceholders,
  checkFont,
  checkInputs,
  checkUIOptions,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
  pluginRegistry,
};

export type {
  Lang,
  Dict,
  Size,
  Schema,
  SchemaForUI,
  Font,
  ColorType,
  BasePdf,
  BlankPdf,
  CustomPdf,
  Template,
  CommonOptions,
  GeneratorOptions,
  Plugin,
  Plugins,
  PluginRegistry,
  GenerateProps,
  UIOptions,
  UIProps,
  PreviewProps,
  DesignerProps,
  ChangeSchemaItem,
  ChangeSchemas,
  SchemaPageArray,
  PropPanel,
  PropPanelSchema,
  PropPanelWidgetProps,
  PDFRenderProps,
  UIRenderProps,
  Mode,
};
