"use strict";

import AbstractDecoder from "../abstractdecoder.js"

/*
var Buffer = require('buffer');
var inflate = require('inflate');
var through = require('through');
*/

export default class DeflateDecoder extends AbstractDecoder {
  decodeBlockAsync(buffer, callback) {
    // through(function (data) {
    //   this.queue(new Buffer(new Uint8Array(buffer)));
    // },
    // function() {
    //   this.queue(null);
    // })
    // .pipe(inflate())
    // /*.pipe(function() {
    //   alert(arguments);
    // })*/
    // .on("data", function(data) {
    //   buffers.push(data);
    // })
    // .on("end", function() {
    //   var buffer = Buffer.concat(buffers);
    //   var arrayBuffer = new ArrayBuffer(buffer.length);
    //   var view = new Uint8Array(ab);
    //   for (var i = 0; i < buffer.length; ++i) {
    //       view[i] = buffer[i];
    //   }
    //   callback(null, arrayBuffer);
    // })
    // .on("error", function(error) {
    //   callback(error, null)
    // });
    throw new Error("DeflateDecoder is not yet implemented.");
  }
}
