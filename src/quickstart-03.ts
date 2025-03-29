import { AffineSchemas } from '@blocksuite/blocks';
import { Schema } from '@blocksuite/store';

import { DocCollection, Text } from '@blocksuite/store';


import { createEmptyDoc, EdgelessEditor, AffineEditorContainer } from '@blocksuite/presets';
import { effects as blocksEffects } from "@blocksuite/blocks/effects";
import { effects as presetsEffects } from "@blocksuite/presets/effects";
// ? import '@toeverything/theme/style.css';
//import './style.css';
import './style-local.css';

blocksEffects();
presetsEffects();

function initEditor() {
  const schema = new Schema();
  schema.register(AffineSchemas);

  const collection = new DocCollection({ schema });
  collection.start();
  collection.meta.initialize();
  const doc = collection.createDoc();
  doc.load(() => {});
  doc.resetHistory();

  //const doc = createEmptyDoc().init();

  const pageBlockId = doc.addBlock("affine:page", {title: new Text("My first Blocksuite page"),});
  const noteId = doc.addBlock('affine:note', {}, pageBlockId);
  doc.addBlock('affine:paragraph', { text: new Text('Hello (Page) World!') }, noteId);

  const surfaceId = doc.addBlock("affine:surface", {}, pageBlockId);
  const surfTextId = doc.addBlock('affine:edgeless-text', {}, surfaceId);
  const surfParaId = doc.addBlock('affine:paragraph', { text: new Text('Hello (Edgeless) World!') }, surfTextId);


  const editor = new AffineEditorContainer();
  editor.doc = doc;

  editor.mode = "edgeless";

  return { editor };
}

const { editor } = initEditor();
const app = document.getElementById("app");

app?.appendChild(editor);