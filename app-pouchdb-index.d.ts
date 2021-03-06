/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   app-pouchdb-index.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="app-pouchdb-database-behavior.d.ts" />
/// <reference path="pouchdb.d.ts" />
/// <reference path="pouchdb.find.d.ts" />

/**
 * `app-pouchdb-index` enables declarative, idempotent configuration of database
 * indexes. The semantics map to those of the pouchdb-find plugin. For more
 * information on creating PouchDB indexes with pouchdb-find, please refer to the
 * documentation
 * [here](https://github.com/nolanlawson/pouchdb-find#dbcreateindexindex--callback).
 *
 * Note: at least one index must be created in order for `app-pouchdb-query` to
 * work.
 */
interface AppPouchdbIndexElement extends Polymer.Element, Polymer.AppPouchDBDatabaseBehavior {

  /**
   * A list of fields to index.
   */
  fields: any[]|null|undefined;

  /**
   * The name of the index, auto-generated if you don't include it.
   */
  name: string|null|undefined;

  /**
   * Design document name (i.e. the part after '_design/'), auto-generated
   * if you don't include it.
   */
  ddoc: string|null|undefined;

  /**
   * The configuration object for the index, derived from `fields`, `name`
   * and `ddoc` properties.
   */
  readonly index: object|null|undefined;
}

interface HTMLElementTagNameMap {
  "app-pouchdb-index": AppPouchdbIndexElement;
}
