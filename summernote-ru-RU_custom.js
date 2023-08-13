/*!
 *
 * Super simple wysiwyg editor v0.8.16
 * https://summernote.org
 *
 *
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 *
 * Date: 2020-02-19T09:12Z
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else {
    var a = factory();
    for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(window, function() {
  return /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if(installedModules[moduleId]) {
        /******/ 			return installedModules[moduleId].exports;
        /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
        /******/ 		};
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.l = true;
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports;
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
      /******/ 		if(!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/ 		}
      /******/ 	};
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function(exports) {
      /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/ 		}
      /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/ 	};
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function(value, mode) {
      /******/ 		if(mode & 1) value = __webpack_require__(value);
      /******/ 		if(mode & 8) return value;
      /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /******/ 		var ns = Object.create(null);
      /******/ 		__webpack_require__.r(ns);
      /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
      /******/ 		return ns;
      /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
      /******/ 		var getter = module && module.__esModule ?
          /******/ 			function getDefault() { return module['default']; } :
          /******/ 			function getModuleExports() { return module; };
      /******/ 		__webpack_require__.d(getter, 'a', getter);
      /******/ 		return getter;
      /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 37);
    /******/ })
      /************************************************************************/
      /******/ ({

        /***/ 37:
        /***/ (function(module, exports) {

          (function ($) {
           
            $.extend($.summernote.lang, {



              'ru-RU': {
                pagebreak: {
                  tooltip: 'Переход на новую страницу'
                },
                cleaner: {
                  tooltip: 'Очистить теги html',
                  not: 'Text has been Cleaned!!!',
                  notEmptySelect: 'Выделите текст, который хотите очистить от тегов html',
                  isCleaned:'Текст отчищен от тегов html',
                  limitText: 'Всего символов',
                  limitHTML: 'HTML'
                },
                listStyleTypes: {
                  tooltip: "List Styles",
                  labelsListStyleTypes: [
                    "Numbered",
                    "Lower Alpha",
                    "Upper Alpha",
                    "Lower Roman",
                    "Upper Roman",
                    "Disc",
                    "Circle",
                    "Square"
                  ]

                },
                findnreplace: {
                  tooltip:            `Найти и заменить`,
                  findBtn:            'Найти ',
                  findPlaceholder:    'Введите текст который хотите заменить',
                  findResult:         ' результат поиска ',
                  findError:          'Ничего не удалось найти',
                  replaceBtn:         'Заменить',
                  replacePlaceholder: 'Введите текст для замены или выделите его...',
                  replaceResult:      ', заменен на ',
                  replaceError:       'Ничего не введено для замены...',
                  noneSelected:       'Ничего не выделено для замены...'
                },
                other:{
                  createFormat:"Создать",
                  fontSize: "Размер",
                  font: "Шрифт",
                  tooltip: "Подсказки",
                  saveText: "Сохранить текст",
                  autoSetting: "Автонастройка",
                  autoSetting_1 : "Реалистичный",
                  autoSetting_2 : "Корявый",
                  autoSetting_3 : "Несильно корявый",
                  autoSetting_4 : "Курица лапой",
                  autoSetting_5 : "Режим ноги",
                  autoSetting_6 : "Для левшей",
                  autoSetting_7 : "Идеальный",
                  autoSetting_8 : "Стандартный",
                  autoSetting_warn : "Чтобы использовать эту настройку купите подписку",
                autoSetting_A4_info : "С помощью этой настройки возможно печатать на листах формата A4.Размер(формат) листа 210х297мм: " +
                      "<a  class=' toDivPrintSetting' href='/instructions'>Подробнее</a>",
                  autoSetting_A5_info : "С помощью этой настройки возможно печатать на листах формата A5. Размер(формат) листа 148х210мм: " +
                      "<a  class=' toDivPrintSetting' href='/instructions'>Подробнее</a>",
                  autoSetting_A6_info : "С помощью этой настройки возможно печатать на листах формата A6. Размер(формат) листа 148х205мм: >" +
                      "<a  class=' toDivPrintSetting' href='/instructions'>Подробнее</a>",
                  autoSetting_A5_v2_info : "С помощью этой настройки возможно печатать в тетрадь со спиралью слева. Размер(формат) листа 165х210:" +
                      ""+
                      " <span>Большинство настроек устанавливается автоматически, а именно: формат, размер текста, отступы, расстояние между строками.<br>" +
                      "Убираются такие функции как: фон тетрадки, второй фон, сетка<br>" +
                      "<b>Вам нужно правильно настроить отступ сверху и в некоторых случаях промежуток между строк</b> </span>" +
                      "<br></br><u>Для этого фона нужно создать новый пользовательский формат для вашего принтера</u><br>" +
                      "<a  class=' toDivPrintSetting' href='/instructions'>Подробнее</a>",
                  autoSetting_A4 : "A4 блочный лист ",
                  autoSetting_A5 : "A5 блочный лист",
                  autoSetting_A5_v2 : "A5 тетрадь с пружиной",
                  autoSetting_A6 : "A6 (Блокнот) пружина сверху",

                  create:"Создать",
                  format_info: "Формат листа для печати",
                  format:"Формат",
                  orientation:"Ориентация",
                  orientationLandscape :"Альбомная",
                  orientationPortrait :"Книжная",
                  addFont :"Добавить шрифт",
                  recoverText :"Восстановить сохраненный текст",
                  bug:"Сообщить об ошибке",
                  math:"Математические символы",
                  math_warn:"Возможно в данном шрифте нет этого математического знака",
                  table_set:"Настройки таблицы",
                  numberCol: "Количество колонок",
                  subscript:"Подстрочные цифры",
                  subscript_warn1:"В данном шрифте нет нижнего регистра. Выберите шрифт со знаком:",
                  subscript_warn2:"Выберите цифры для нижнего регистра",
                  superscript: "Надстрочные цифры",
                  superscript_warn1:"В данном шрифте нет верхнего регистра. Выберите шрифт со знаком",
                  superscript_warn2:"Выберите цифры для верхнего регистра(степени)",
                },
                orderFont:{
                  byIdReverse :"По дате добавления",
                  byMultiFonts : "С несколькими вариантами букв",
                  byFavorite:"Избранные шрифты",
                  byKz:"С казахским языком",
                  byBg: "С беллоруским языком",
                  byMath: "С математическими символами",

                },
                font: {
                  bold: 'Полужирный',
                  italic: 'Курсив',
                  underline: 'Подчёркнутый',
                  clear: 'Убрать стили шрифта',
                  height: 'Высота линии',
                  name: 'Шрифт',
                  strikethrough: 'Зачёркнутый',
                  subscript: 'Нижний индекс',
                  superscript: 'Верхний индекс',
                  size: 'Размер шрифта'
                },
                image: {
                  image: 'Картинка',
                  insert: 'Вставить картинку',
                  resizeFull: 'Восстановить размер',
                  resizeHalf: 'Уменьшить до 50%',
                  resizeQuarter: 'Уменьшить до 25%',
                  floatLeft: 'Расположить слева',
                  floatRight: 'Расположить справа',
                  floatNone: 'Расположение по-умолчанию',
                  shapeRounded: 'Форма: Закругленная',
                  shapeCircle: 'Форма: Круг',
                  shapeThumbnail: 'Форма: Миниатюра',
                  shapeNone: 'Форма: Нет',
                  dragImageHere: 'Перетащите сюда картинку',
                  dropImage: 'Перетащите картинку',
                  selectFromFiles: 'Выбрать из файлов',
                  maximumFileSize: 'Максимальный размер файла',
                  maximumFileSizeError: 'Превышен максимальный размер файла',
                  url: 'URL картинки',
                  remove: 'Удалить картинку',
                  original: 'Оригинал'
                },
                video: {
                  video: 'Видео',
                  videoLink: 'Ссылка на видео',
                  insert: 'Вставить видео',
                  url: 'URL видео',
                  providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion или Youku)'
                },
                link: {
                  link: 'Ссылка',
                  insert: 'Вставить ссылку',
                  unlink: 'Убрать ссылку',
                  edit: 'Редактировать',
                  textToDisplay: 'Отображаемый текст',
                  url: 'URL для перехода',
                  openInNewWindow: 'Открывать в новом окне'
                },
                table: {
                  table: 'Таблица',
                  addRowAbove: 'Добавить строку выше',
                  addRowBelow: 'Добавить строку ниже',
                  addColLeft: 'Добавить столбец слева',
                  addColRight: 'Добавить столбец справа',
                  delRow: 'Удалить строку',
                  delCol: 'Удалить столбец',
                  delTable: 'Удалить таблицу'
                },
                hr: {
                  insert: 'Вставить горизонтальную линию'
                },
                style: {
                  style: 'Стиль',
                  p: 'Нормальный',
                  blockquote: 'Цитата',
                  pre: 'Код',
                  h1: 'Заголовок 1',
                  h2: 'Заголовок 2',
                  h3: 'Заголовок 3',
                  h4: 'Заголовок 4',
                  h5: 'Заголовок 5',
                  h6: 'Заголовок 6'
                },
                lists: {
                  unordered: 'Маркированный список',
                  ordered: 'Нумерованный список'
                },
                options: {
                  help: 'Помощь',
                  fullscreen: 'На весь экран',
                  codeview: 'Код html'
                },


                paragraph: {
                  paragraph: 'Параграф',
                  outdent: 'Уменьшить отступ',
                  indent: 'Увеличить отступ',
                  left: 'Выровнять по левому краю',
                  center: 'Выровнять по центру',
                  right: 'Выровнять по правому краю',
                  justify: 'Растянуть по ширине'
                },
                color: {
                  recent: 'Цвет букв',
                  more: 'Еще цвета',
                  background: 'Цвет фона',
                  foreground: 'Цвет шрифта',
                  transparent: 'Прозрачный',
                  setTransparent: 'Сделать прозрачным',
                  reset: 'Сброс',
                  resetToDefault: 'Восстановить умолчания',
                  cpSelect: 'Создать цвет'
                },
                shortcut: {
                  shortcuts: 'Сочетания клавиш',
                  close: 'Закрыть',
                  textFormatting: 'Форматирование текста',
                  action: 'Действие',
                  paragraphFormatting: 'Форматирование параграфа',
                  documentStyle: 'Стиль документа',
                  extraKeys: 'Дополнительные комбинации'
                },
                help: {
                  'insertParagraph': 'Новый параграф',
                  'undo': 'Отменить последнюю команду',
                  'redo': 'Повторить последнюю команду',
                  'tab': 'Tab',
                  'untab': 'Untab',
                  'bold': 'Установить стиль "Жирный"',
                  'italic': 'Установить стиль "Наклонный"',
                  'underline': 'Установить стиль "Подчеркнутый"',
                  'strikethrough': 'Установить стиль "Зачеркнутый"',
                  'removeFormat': 'Сбросить стили',
                  'justifyLeft': 'Выровнять по левому краю',
                  'justifyCenter': 'Выровнять по центру',
                  'justifyRight': 'Выровнять по правому краю',
                  'justifyFull': 'Растянуть на всю ширину',
                  'insertUnorderedList': 'Включить/отключить маркированный список',
                  'insertOrderedList': 'Включить/отключить нумерованный список',
                  'outdent': 'Убрать отступ в текущем параграфе',
                  'indent': 'Вставить отступ в текущем параграфе',
                  'formatPara': 'Форматировать текущий блок как параграф (тег P)',
                  'formatH1': 'Форматировать текущий блок как H1',
                  'formatH2': 'Форматировать текущий блок как H2',
                  'formatH3': 'Форматировать текущий блок как H3',
                  'formatH4': 'Форматировать текущий блок как H4',
                  'formatH5': 'Форматировать текущий блок как H5',
                  'formatH6': 'Форматировать текущий блок как H6',
                  'insertHorizontalRule': 'Вставить горизонтальную черту',
                  'linkDialog.show': 'Показать диалог "Ссылка"'
                },
                history: {
                  undo: 'Отменить',
                  redo: 'Повтор'
                },
                specialChar: {
                  specialChar: 'SPECIAL CHARACTERS',
                  select: 'Select Special characters'
                },

              },




              'en-US': {
                pagebreak: {
                  tooltip: 'Переход на новую страницу'
                },
                cleaner: {
                  tooltip: 'Remove html tags',
                  not: 'Text has been Cleaned!!!',
                  notEmptySelect: 'Highlight the text you want to Remove html tags',
                  isCleaned:'Text has been Cleaned!!!',
                  limitText: 'Total characters\n',
                  limitHTML: 'HTML'
                },
                findnreplace: {
                  tooltip:            `Find 'N Replace`,
                  findBtn:            'Find ',
                  findPlaceholder:    'Enter the text you want to find...',
                  findResult:         ' results found for ',
                  findError:          'Nothing entered to find...',
                  replaceBtn:         'Replace',
                  replacePlaceholder: 'Enter the text to replace the text above or selected...',
                  replaceResult:      ', replaced by ',
                  replaceError:       'Nothing entered to replace...',
                  noneSelected:       'Nothing selected to replace...'
                },
                other:{
                  createFormat:"Create",
                  fontSize: "Size",
                  font: "Font",
                  tooltip: "Help",
                  saveText: "Save text",
                  autoSetting: "Auto Settings",
                  autoSetting_1 : "Realistic",
                  autoSetting_2 : "Sloppy",
                  autoSetting_3 : "not too sloppy",
                  autoSetting_4 : "Chicken paw",
                  autoSetting_5 : "Leg mode",
                  autoSetting_6 : "For left-handers",
                  autoSetting_7 : "Ideal",
                  autoSetting_8 : "Default",
                  autoSetting_A4_info : "С помощью этой настройки возможно печатать на листах формата A4: <img class='zoom-image' width='200px' src='/static/images/example_a5/exAutoSettings/a4_exAutosettings.jpg' />" +
                      "<a  class='' href='/instructions'>Подробнее</a>",
                  autoSetting_A5_info : "С помощью этой настройки возможно печатать на листах формата A5: <img class='zoom-image' width='200px' src='/static/images/example_a5/exAutoSettings/a5_exAutosettings.jpg' />" +
                      "<a  class='' href='/instructions'>Подробнее</a>",
                  autoSetting_A6_info : "С помощью этой настройки возможно печатать на листах формата A6: <img class='zoom-image' width='200px' src='/static/images/example_a5/exAutoSettings/a6_exAutosettings.jpg' />" +
                      "<a  class='' href='/instructions'>Подробнее</a>",

                  autoSetting_A4 : "A4 notebook (210х297mm)",
                  autoSetting_A5 : "A5 notebook (148х210mm)",
                  autoSetting_A6 : "A6 top spiral notebook(148х105mm)",
                  autoSetting_warn : "To use this setting, buy a subscription",
                  create:"Create",
                  format_info: "Print sheet size\n",
                  format:"Format",
                  orientation:"Orientation",
                  orientationLandscape :"Landscape",
                  orientationPortrait :"Portrait",
                  addFont :"Add font",
                  recoverText :"Recover Saved Text\n",
                  bug:"Report a bug\n",
                  math:"Math symbols\n",
                  math_warn:"Perhaps this font does not have this mathematical sign\n",
                  table_set:"Table settings\n",
                  numberCol: "Number of columns\n",
                  subscript:"Subscript numbers\n",
                  subscript_warn1:"This font has no lower case. Select a signed font:\n",
                  subscript_warn2:"Select numbers for lower case\n",
                  superscript: "Superscript numbers\n",
                  superscript_warn1:"This font has no upper case. Select a signed font:\n",
                  superscript_warn2:"Select numbers for upper case (degrees)\n",
                },
                orderFont:{
                  byIdReverse :"By date added\n",
                  byMultiFonts : "With multiple letter options\n",
                  byFavorite:"Favorite fonts\n",
                  byKz:"With Kazakh language\n",
                  byBg: "With belarusian language\n",
                  byMath: "With mathematical symbols\n",

                },
                font: {
                  bold: 'Bold',
                  italic: 'Italic',
                  underline: 'Underline',
                  clear: 'Remove Font Style',
                  height: 'Line Height',
                  name: 'Font Family',
                  strikethrough: 'Strikethrough',
                  subscript: 'Subscript',
                  superscript: 'Superscript',
                  size: 'Font Size',
                  sizeunit: 'Font Size Unit',
                },
                image: {
                  image: 'Picture',
                  insert: 'Insert Image',
                  resizeFull: 'Resize full',
                  resizeHalf: 'Resize half',
                  resizeQuarter: 'Resize quarter',
                  resizeNone: 'Original size',
                  floatLeft: 'Float Left',
                  floatRight: 'Float Right',
                  floatNone: 'Remove float',
                  shapeRounded: 'Shape: Rounded',
                  shapeCircle: 'Shape: Circle',
                  shapeThumbnail: 'Shape: Thumbnail',
                  shapeNone: 'Shape: None',
                  dragImageHere: 'Drag image or text here',
                  dropImage: 'Drop image or Text',
                  selectFromFiles: "Select files",
                  maximumFileSize: 'Maximum file size',
                  maximumFileSizeError: 'Maximum file size exceeded.',
                  url: 'Image URL',
                  remove: 'Remove Image',
                  original: 'Original',
                },
                video: {
                  video: 'Video',
                  videoLink: 'Video Link',
                  insert: 'Insert Video',
                  url: 'Video URL',
                  providers: '(YouTube, Google Drive, Vimeo, Vine, Instagram, DailyMotion or Youku)',
                },
                link: {
                  link: 'Link',
                  insert: 'Insert Link',
                  unlink: 'Unlink',
                  edit: 'Edit',
                  textToDisplay: 'Text to display',
                  url: 'To what URL should this link go?',
                  openInNewWindow: 'Open in new window',
                  useProtocol: 'Use default protocol',
                },
                table: {
                  table: 'Table',
                  addRowAbove: 'Add row above',
                  addRowBelow: 'Add row below',
                  addColLeft: 'Add column left',
                  addColRight: 'Add column right',
                  delRow: 'Delete row',
                  delCol: 'Delete column',
                  delTable: 'Delete table',
                },
                hr: {
                  insert: 'Insert Horizontal Rule',
                },
                style: {
                  style: 'Style',
                  p: 'Normal',
                  blockquote: 'Quote',
                  pre: 'Code',
                  h1: 'Header 1',
                  h2: 'Header 2',
                  h3: 'Header 3',
                  h4: 'Header 4',
                  h5: 'Header 5',
                  h6: 'Header 6',
                },
                lists: {
                  unordered: 'Unordered list',
                  ordered: 'Ordered list',
                },
                options: {
                  help: 'Help',
                  fullscreen: 'Full Screen',
                  codeview: 'Code View',
                },
                paragraph: {
                  paragraph: 'Paragraph',
                  outdent: 'Outdent',
                  indent: 'Indent',
                  left: 'Align left',
                  center: 'Align center',
                  right: 'Align right',
                  justify: 'Justify full',
                },
                color: {
                  recent: 'Recent Color',
                  more: 'More Color',
                  background: 'Background Color',
                  foreground: 'Text Color',
                  transparent: 'Transparent',
                  setTransparent: 'Set transparent',
                  reset: 'Reset',
                  resetToDefault: 'Reset to default',
                  cpSelect: 'Select',
                },
                shortcut: {
                  shortcuts: 'Keyboard shortcuts',
                  close: 'Close',
                  textFormatting: 'Text formatting',
                  action: 'Action',
                  paragraphFormatting: 'Paragraph formatting',
                  documentStyle: 'Document Style',
                  extraKeys: 'Extra keys',
                },
                help: {
                  'escape': 'Escape',
                  'insertParagraph': 'Insert Paragraph',
                  'undo': 'Undo the last command',
                  'redo': 'Redo the last command',
                  'tab': 'Tab',
                  'untab': 'Untab',
                  'bold': 'Set a bold style',
                  'italic': 'Set a italic style',
                  'underline': 'Set a underline style',
                  'strikethrough': 'Set a strikethrough style',
                  'removeFormat': 'Clean a style',
                  'justifyLeft': 'Set left align',
                  'justifyCenter': 'Set center align',
                  'justifyRight': 'Set right align',
                  'justifyFull': 'Set full align',
                  'insertUnorderedList': 'Toggle unordered list',
                  'insertOrderedList': 'Toggle ordered list',
                  'outdent': 'Outdent on current paragraph',
                  'indent': 'Indent on current paragraph',
                  'formatPara': 'Change current block\'s format as a paragraph(P tag)',
                  'formatH1': 'Change current block\'s format as H1',
                  'formatH2': 'Change current block\'s format as H2',
                  'formatH3': 'Change current block\'s format as H3',
                  'formatH4': 'Change current block\'s format as H4',
                  'formatH5': 'Change current block\'s format as H5',
                  'formatH6': 'Change current block\'s format as H6',
                  'insertHorizontalRule': 'Insert horizontal rule',
                  'linkDialog.show': 'Show Link Dialog',
                },
                history: {
                  undo: 'Undo',
                  redo: 'Redo',
                },
                specialChar: {
                  specialChar: 'SPECIAL CHARACTERS',
                  select: 'Select Special characters',
                },
                output: {
                  noSelection: 'No Selection Made!',
                },
              },

            })
          })(jQuery);

          /***/ })

        /******/ });
});