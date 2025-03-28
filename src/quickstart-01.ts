/*
  this is the simplest example
*/

import { createEmptyDoc, EdgelessEditor, AffineEditorContainer } from '@blocksuite/presets';
import { effects as blocksEffects } from "@blocksuite/blocks/effects";
import { effects as presetsEffects } from "@blocksuite/presets/effects";
import '@toeverything/theme/style.css';

blocksEffects();
presetsEffects();

function initEditor() {

  const doc = createEmptyDoc().init();

  const editor = new AffineEditorContainer();
  editor.doc = doc;


  return { editor };
}

const { editor } = initEditor();
const app = document.getElementById("app");

app?.appendChild(editor);