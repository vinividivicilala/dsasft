const theme = {
  type: "dark",
  tokenColors: [
    {
      settings: {
        foreground: "#a6b1c9ff",
        background: "#0c0e1dff",
      },
    },
    {
      name: "Comment",
      scope: "comment, string.comment",
      settings: {
        fontStyle: "italic",
        foreground: "#5D688A",
      },
    },
    {
      name: "Comment Param",
      scope: "storage.type.class.jsdoc",
      settings: {
        fontStyle: "italic",
        foreground: "#404968",
      },
    },
    {
      name: "Comment Arguments",
      scope: "entity.name.type.instance.jsdoc",
      settings: {
        fontStyle: "italic",
        foreground: "#5D688A",
      },
    },
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: "#C9B999",
      },
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "Embeded String Begin and End",
      scope: "string.embedded.begin, string.embedded.end",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "Embeded String",
      scope: "string.embedded",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "Built-in constant",
      scope: "constant.language",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Built-in constant",
      scope: "constant.language.boolean.true",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Built-in constant falsy",
      scope:
        "constant.language.boolean.false, constant.language.null, constant.language.nan, constant.language.undefined",
      settings: {
        foreground: "#e57685",
      },
    },
    {
      name: "Built-in constant import/export all",
      scope: "constant.language.import-export-all",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "User-defined constant",
      scope:
        "constant.character, constant.other, variable.other.constant",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Language Variable",
      scope: "variable.language",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Variable",
      scope: "variable.readwrite, variable.readwrite.other.block",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Keyword",
      scope: "keyword",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "This",
      scope: "variable.language.this, variable.language.this.js",
      settings: {
        foreground: "#c8d5f3",
      },
    },
    {
      name: "Keyword Operator",
      scope: "keyword.operator",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Keyword Operator Assignment",
      scope: "keyword.operator.assignment.js",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Storage type",
      scope: "storage.type",
      settings: {
        background: "",
        foreground: "#61A2EF",
      },
    },
    {
      name: "Storage type C#",
      scope: "source.cs storage.type",
      settings: {
        background: "",
        foreground: "#56B6C2",
      },
    },
    {
      name: "Class name",
      scope:
        "entity.name.class, entity.name.module, entity.name.type, storage.identifier,  support.class",
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Other variable",
      scope: "variable.other.object",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Other block",
      scope: "variable.other.block",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Property",
      scope:
        "support.variable.property, variable.other.property, variable.other.object.property",
      settings: {
        foreground: "#8E9FDA",
      },
    },
    {
      name: "Other readwrite",
      scope: "variable.other.readwrite",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Other readwrite alias",
      scope: "variable.other.readwrite.alias",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Inherited class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "Function name",
      scope: "entity.name.function",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "Function argument",
      scope: "variable.parameter",
      settings: {
        foreground: "#86bb94",
      },
    },
    {
      name: "Function call",
      scope: "entity.name.function-call",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "Builtin Functions",
      scope: "function.support.builtin, function.support.core",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "Tag name",
      scope:
        "entity.name.tag, entity.name.tag.class.js, entity.name.tag.class.jsx",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Tag Class and ID",
      scope: "entity.name.tag.class",
      settings: {
        foreground: "#8E9FDA",
      },
    },
    {
      name: "Doctype",
      scope: "meta.tag.sgml.doctype.html",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Tag attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#8E9FDA",
      },
    },
    {
      name: "Library function",
      scope: "support.function",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "Library constant",
      scope: "support.constant",
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Library class/type",
      scope: "support.type, support.variable",
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Json Property",
      scope: "support.dictionary.json, source.json support.type",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "JSON String",
      scope: "source.json string",
      settings: {
        foreground: "#C9B999",
      },
    },
    {
      name: "StyleSheet Property name",
      scope:
        "support.type.property-name.css, support.type.property-name.scss, support.type.property-name.less, support.type.property-name.sass",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "StyleSheet Property value",
      scope:
        "support.constant.css, support.constant.scss, support.constant.less, support.constant.sass",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "StyleSheet Variable",
      scope:
        "variable.css, variable.scss, variable.less, variable.sass",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "StyleSheet Variable String",
      scope:
        "variable.css.string, variable.scss.string, variable.less.string, variable.sass.string",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "StyleSheet Unit",
      scope: "unit.css, unit.scss, unit.less, unit.sass",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "StyleSheet Numbers",
      scope:
        "meta.property-value.css constant.numeric.css, meta.property-value.scss constant.numeric.scss, meta.property-value.less constant.numeric.less, meta.property-value.sass constant.numeric.sass",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "StyleSheet Colors",
      scope: "source.css constant.other",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "StyleSheet Support Constant",
      scope: "source.css support.constant",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "StyleSheet Function",
      scope:
        "function.css, function.scss, function.less, function.sass",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "Stylesheet Tags",
      scope:
        "entity.name.tag.css, entity.name.tag.scss, entity.name.tag.less, entity.name.tag.sass",
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Stylesheet Attributes",
      scope:
        "entity.other.attribute-name.css, entity.other.attribute-name.scss, entity.other.attribute-name.less, entity.other.attribute-name.sasscss",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Stylesheet Class",
      scope:
        "entity.other.attribute-name.class.css, entity.other.attribute-name.class.scss, entity.other.attribute-name.class.less, entity.other.attribute-name.class.sass",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Stylesheet ID",
      scope:
        "entity.other.attribute-name.id.css, entity.other.attribute-name.id.scss, entity.other.attribute-name.id.less, entity.other.attribute-name.id.sass",
      settings: {
        foreground: "#86bb94",
      },
    },
    {
      name: "Stylesheet Psuedo-Class",
      scope:
        "entity.other.attribute-name.pseudo-class.css, entity.other.attribute-name.pseudo-class.scss, entity.other.attribute-name.pseudo-class.less, entity.other.attribute-name.pseudo-class.sass",
      settings: {
        foreground: "#8E9FDA",
      },
    },
    {
      name: "Stylesheet Pseudo-Element",
      scope:
        "entity.other.attribute-name.pseudo-element.css, entity.other.attribute-name.pseudo-element.scss, entity.other.attribute-name.pseudo-element.less, entity.other.attribute-name.pseudo-element.sass",
      settings: {
        foreground: "#8E9FDA",
      },
    },
    {
      name: "Stylesheet At-Rules",
      scope:
        "meta.at-rule.media.css, meta.at-rule.media.scss, meta.at-rule.media.less, meta.at-rule.media.sass",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Stylesheet Keywords",
      scope:
        "source.css keyword, source.css keyword.operator.logical, source.css keyword.operator.constructor, source.scss keyword, source.scss keyword.operator.logical, source.scss keyword.operator.constructor, source.less keyword, source.less keyword.operator.logical, source.less keyword.operator.constructor, source.sass keyword, source.sass keyword.operator.logical, source.sass keyword.operator.constructor",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "Stylesheet Unit Postfix",
      scope: "source.css keyword.other.unit",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "Stylesheet Vendor Props",
      scope: "source.css support.type.vendored.property-name.css",
      settings: {
        foreground: "#6F7887",
      },
    },
    {
      scope: "source.css support.function",
      name: "Stylesheet Support Functions",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "Stylesheet Function argument",
      scope: "source.css variable.parameter",
      settings: {
        foreground: "#D4C19B",
      },
    },
    {
      name: "Stylesheet Variables",
      scope: "source.css variable.other",
      settings: {
        foreground: "#86bb94",
      },
    },
    {
      name: "Library variable",
      scope: "support.other.variable",
      settings: {
        fontStyle: "",
      },
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        background: "#e57685",
        foreground: "#F8F8F0",
      },
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        background: "#56B6C2",
        foreground: "#F8F8F0",
      },
    },
    {
      name: "Link",
      scope: "string.detected-link",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "diff.header",
      scope: "meta.diff, meta.diff.header",
      settings: {
        foreground: "#4B525B",
      },
    },
    {
      name: "diff.deleted",
      scope: "markup.deleted",
      settings: {
        foreground: "#e57685",
      },
    },
    {
      name: "diff.inserted",
      scope: "markup.inserted",
      settings: {
        foreground: "#86bb94",
      },
    },
    {
      name: "diff.changed",
      scope: "markup.changed",
      settings: {
        foreground: "#D1BF94",
      },
    },
    {
      scope: "constant.numeric.line-number.find-in-files - match",
      settings: {
        foreground: "#56B6C2A0",
      },
    },
    {
      scope: "entity.name.filename.find-in-files",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "XML Tag",
      scope:
        "entity.name.tag.xml, entity.name.tag.xml.html,entity.name.tag.html",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "XML Namespace",
      scope:
        "entity.name.tag.namespace.xml, entity.other.attribute-name.namespace.xml",
      settings: {
        foreground: "#86bb94",
      },
    },
    {
      name: "XML Punctuation",
      scope:
        "punctuation.definition.tag.xml,punctuation.definition.tag.html, punctuation.definition.tag",
      settings: {
        foreground: "#a6b1c9",
      },
    },
    {
      name: "XML Localname",
      scope: "entity.name.tag.localname.xml",
      settings: {
        foreground: "#61A2EF",
      },
    },
    {
      name: "XML Attribute",
      scope:
        "entity.other.attribute-name.xml, entity.other.attribute-name.localname.xml,entity.other.attribute-name.html",
      settings: {
        foreground: "#d491cf",
      },
    },
    {
      name: "XML Keywords",
      scope:
        "keyword.other.entitytype.xml, keyword.other.entity.xml, keyword.other.page-props.xml",
      settings: {
        foreground: "#E5C07B",
      },
    },
    {
      name: "HTML Id",
      scope:
        "meta.attribute-with-value.id.html meta.toc-list.id.html, meta.attribute-with-value.id.html string.quoted.double.html",
      settings: {
        foreground: "#86bb94",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#658ce6",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#cd9731",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#b267e6",
      },
    },
  ],
  colors: {
    "peekViewTitleLabel.foreground": "#fff",
    "foreground": "#a6b1c9",
    "errorForeground": "#e57685",
    "disabledForeground": "#6b7794",
    "badge.background": "#303550",
    "dropdown.background": "#303550",
    "dropdown.border": "#303550",
    "selection.background": "#495078",
    "input.background": "#303550",
    "input.border": "#303550",
    "button.background": "#505FAB",
    "button.hoverBackground": "#5E6DB7",
    "button.secondaryBackground": "#303550",
    "button.secondaryHoverBackground": "#3D4366",
    "breadcrumb.foreground": "#6b7794",
    "breadcrumb.focusForeground": "#c8d5f3",
    "breadcrumb.activeSelectionForeground": "#c8d5f3",
    "activityBar.backgrounds": "#090b24",
    "activityBar.background": "#0c0e1d",
    "activityBar.foreground": "#a0aac0",
    "activityBar.activeBorder": "#404968",
    "activityBar.inactiveForeground": "#404968",
    "activityBarBadge.background": "#505FAB",
    "activityBarBadge.foreground": "#c8d5f3",
    "sideBar.foreground": "#949fb8",
    "sideBar.background": "#0c0e1d",
    "sideBarTitle.foreground": "#a0aac0",
    "sideBarSectionHeader.background": "#0c0e1d",
    "sideBarSectionHeader.foreground": "#a0aac0",
    "panel.border": "#0c0e1d",
    "panel.background": "#1f2237",
    "panelSectionHeader.background": "#1f2237",
    "panelSection.dropBackground": "#1f2237",
    "panelTitle.activeForeground": "#c8d5f3",
    "panelTitle.inactiveForeground": "#6b7794",
    "debugToolBar.background": "#1f2237",
    "debugToolBar.border": "#1f2237",
    "editor.background": "#1f2237",
    "editor.foreground": "#a6b1c9",
    "editor.selectionBackground": "#303656",
    "editor.inactiveSelectionBackground": "#303656",
    "editor.hoverHighlightBackground": "#303656",
    "editor.wordHighlightBackground": "#303656",
    "editor.wordHighlightStrongBackground": "#333852",
    "editor.rangeHighlightBackground": "#303656",
    "editor.findMatchBackground": "#303656",
    "editorLineNumber.foreground": "#404968",
    "editorLineNumber.activeForeground": "#c8d5f3",
    "editorCursor.foreground": "#6075ED",
    "editorWhitespace.foreground": "#1f2237",
    "editorWidget.background": "#0c0e1d",
    "editorWidget.resizeBorder": "#282d43",
    "editorGroup.dropBackground": "#1f2237",
    "editorGroup.border": "#282d43",
    "sash.hoverBorder": "#282d43",
    "editorGroupHeader.noTabsBackground": "#0c0e1d",
    "editorGroupHeader.tabsBackground": "#0c0e1d",
    "editorSuggestWidget.background": "#0c0e1d",
    "editorSuggestWidget.foreground": "#a6b1c9",
    "editorSuggestWidget.highlightForeground": "#c8d5f3",
    "editorSuggestWidget.selectedBackground": "#303656",
    "editorHoverWidget.background": "#303550",
    "editorHoverWidget.border": "#303550",
    "editorCodeLens.foreground": "#404968",
    "editorBracketMatch.background": "#303656",
    "editorBracketHighlight.foreground1": "#a6b1c9",
    "editorBracketHighlight.foreground2": "#61A2EF",
    "editorBracketHighlight.foreground3": "#a6b1c9",
    "editorBracketHighlight.foreground4": "#61A2EF",
    "editorBracketHighlight.foreground5": "#a6b1c9",
    "editorBracketHighlight.foreground6": "#61A2EF",
    "inputValidation.errorBackground": "#e57685",
    "inputValidation.errorBorder": "#e57685",
    "inputValidation.errorForeground": "#E8DCDE",
    "inputValidation.infoBackground": "#61A2EF",
    "inputValidation.infoBorder": "#61A2EF",
    "inputValidation.infoForeground": "#D9E4EE",
    "inputValidation.warningBackground": "#E0936C",
    "inputValidation.warningBorder": "#E0936C",
    "inputValidation.warningForeground": "#EFDFD8",
    "minimap.errorHighlight": "#e57685",
    "minimap.warningHighlight": "#E09A6C",
    "list.highlightForeground": "#61A2EF",
    "list.focusHighlightForeground": "#61A2EF",
    "list.errorForeground": "#e57685",
    "list.warningForeground": "#E09A6C",
    "problemsErrorIcon.foreground": "#e57685",
    "problemsWarningIcon.foreground": "#E09A6C",
    "problemsInfoIcon.foreground": "#6CCBE0",
    "editorError.foreground": "#e57685",
    "editorWarning.foreground": "#E09A6C",
    "editorInfo.foreground": "#6CCBE0",
    "tab.activeForeground": "#c8d5f3",
    "tab.inactiveBackground": "#0c0e1d",
    "tab.inactiveForeground": "#6b7794",
    "tab.unfocusedActiveForeground": "#6b7794",
    "tab.unfocusedInactiveForeground": "#6b7794",
    "list.activeSelectionBackground": "#0c0e1d",
    "list.dropBackground": "#505FAB",
    "list.focusBackground": "#0c0e1d",
    "list.hoverBackground": "#1f2237",
    "list.inactiveSelectionBackground": "#0c0e1d",
    "list.invalidItemForeground": "#e57685",
    "explorer.deemphasizedForeground": "#c8d5f3",
    "terminal.foreground": "#a6b1c9",
    "terminal.ansiBlack": "#6F7887",
    "terminal.ansiBlue": "#61A2EF",
    "terminal.ansiBrightBlack": "#6F7887",
    "terminal.ansiBrightBlue": "#61A2EF",
    "terminal.ansiBrightCyan": "#56B6C2",
    "terminal.ansiBrightGreen": "#86bb94",
    "terminal.ansiBrightMagenta": "#d491cf",
    "terminal.ansiBrightRed": "#e57685",
    "terminal.ansiBrightWhite": "#a6b1c9",
    "terminal.ansiBrightYellow": "#C9B999",
    "terminal.ansiCyan": "#56B6C2",
    "terminal.ansiGreen": "#86bb94",
    "terminal.ansiMagenta": "#d491cf",
    "terminal.ansiRed": "#e57685",
    "terminal.ansiWhite": "#a6b1c9",
    "terminal.ansiYellow": "#C9B999",
    "statusBar.background": "#0c0e1d",
    "statusBar.foreground": "#949fb8",
    "statusBar.debuggingBackground": "#0c0e1d",
    "statusBar.debuggingForeground": "#61A2EF",
    "statusBar.noFolderBackground": "#0c0e1d",
    "statusBar.noFolderForeground": "#949fb8",
    "peekView.border": "#0c0e1d",
    "peekViewEditor.background": "#0c0e1d",
    "peekViewEditorGutter.background": "#0c0e1d",
    "peekViewEditor.matchHighlightBackground": "#333942",
    "peekViewResult.background": "#0c0e1d",
    "peekViewResult.fileForeground": "#6b7794",
    "peekViewResult.lineForeground": "#a6b1c9",
    "peekViewResult.matchHighlightBackground": "#282d43",
    "peekViewResult.selectionBackground": "#0c0e1d",
    "peekViewResult.selectionForeground": "#a6b1c9",
    "peekViewTitle.background": "#0c0e1d",
    "peekViewTitleDescription.foreground": "#6b7794",
    "titleBar.activeBackground": "#0c0e1d",
    "titleBar.activeForeground": "#949fb8",
    "titleBar.inactiveBackground": "#0c0e1d",
    "titleBar.inactiveForeground": "#6b7794",
    "titleBar.border": "#0c0e1d",
    "menubar.selectionBackground": "#0c0e1d",
    "menubar.selectionForeground": "#a6b1c9",
    "menu.background": "#2B3149",
    "menu.foreground": "#a6b1c9",
    "menu.selectionForeground": "#a6b1c9",
    "menu.separatorBackground": "#1f2237",
    "toolbar.hoverBackground": "#0c0e1d",
    "toolbar.activeBackground": "#242a47",
    "notificationLink.foreground": "#61A2EF",
    "pickerGroup.foreground": "#61A2EF",
    "symbolIcon.fieldForeground": "#61A2EF",
    "symbolIcon.interfaceForeground": "#61A2EF",
    "symbolIcon.variableForeground": "#61A2EF",
    "textLink.foreground": "#505FAB",
    "textLink.activeForeground": "#505FAB",
    "progressBar.background": "#505FAB",
    "gitDecoration.addedResourceForeground": "#56B6C2",
    "gitDecoration.modifiedResourceForeground": "#C9B999",
    "gitDecoration.deletedResourceForeground": "#e57685",
    "gitDecoration.renamedResourceForeground": "#56B6C2",
    "gitDecoration.untrackedResourceForeground": "#56B6C2",
    "gitDecoration.ignoredResourceForeground": "#576181",
    "gitDecoration.stageModifiedResourceForeground": "#C9B999",
    "gitDecoration.stageDeletedResourceForeground": "#e57685",
    "gitDecoration.conflictingResourceForeground": "#d491cf",
    "gitDecoration.submoduleResourceForeground": "#d491cf",
    "focusBorder": "#282d4300",
    "widget.shadow": "#00000000",
    "panelTitle.activeBorder": "#1f223700",
    "editor.selectionHighlightBackground": "#4E5989bb",
    "editor.lineHighlightBackground": "#49507824",
    "editor.findMatchHighlightBackground": "#4E5989bb",
    "editorSuggestWidget.border": "#0c0e1d00",
    "tree.indentGuidesStroke": "#404968bb",
    "editorIndentGuide.background": "#40496829",
    "editorIndentGuide.activeBackground": "#404968B0",
    "editorBracketMatch.border": "#404968B0",
    "editorBracketPairGuide.activeBackground1": "#a6b1c938",
    "editorBracketPairGuide.activeBackground2": "#6182EF38",
    "editorBracketPairGuide.activeBackground3": "#a6b1c938",
    "editorBracketPairGuide.activeBackground4": "#6182EF38",
    "editorBracketPairGuide.activeBackground5": "#a6b1c938",
    "editorBracketPairGuide.activeBackground6": "#6182EF38",
    "editorBracketPairGuide.background1": "#a6b1c938",
    "editorBracketPairGuide.background2": "#6182EF38",
    "editorBracketPairGuide.background3": "#a6b1c938",
    "editorBracketPairGuide.background4": "#6182EF38",
    "editorBracketPairGuide.background5": "#a6b1c938",
    "editorBracketPairGuide.background6": "#6182EF38",
    "editorError.background": "#00000000",
    "editorWarning.background": "#00000000",
    "editorInfo.background": "#00000000",
    "editorError.border": "#00000000",
    "editorWarning.border": "#00000000",
    "editorInfo.border": "#00000000",
    "scrollbar.shadow": "#1f223700",
    "scrollbarSlider.activeBackground": "#58618d35",
    "scrollbarSlider.background": "#454c6e35",
    "scrollbarSlider.hoverBackground": "#58618d35",
    "tab.border": "#0c0e1d00",
    "toolbar.hoverOutline": "#00000000",
  },
};

export default theme;
