// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26508 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26508 = (function (fn_handler,f,meta26509){
this.fn_handler = fn_handler;
this.f = f;
this.meta26509 = meta26509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26510,meta26509__$1){
var self__ = this;
var _26510__$1 = this;
return (new cljs.core.async.t26508(self__.fn_handler,self__.f,meta26509__$1));
});

cljs.core.async.t26508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26510){
var self__ = this;
var _26510__$1 = this;
return self__.meta26509;
});

cljs.core.async.t26508.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26509","meta26509",-2085207492,null)], null);
});

cljs.core.async.t26508.cljs$lang$type = true;

cljs.core.async.t26508.cljs$lang$ctorStr = "cljs.core.async/t26508";

cljs.core.async.t26508.cljs$lang$ctorPrWriter = (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t26508");
});

cljs.core.async.__GT_t26508 = (function cljs$core$async$fn_handler_$___GT_t26508(fn_handler__$1,f__$1,meta26509){
return (new cljs.core.async.t26508(fn_handler__$1,f__$1,meta26509));
});

}

return (new cljs.core.async.t26508(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26512 = buff;
if(G__26512){
var bit__18759__auto__ = null;
if(cljs.core.truth_((function (){var or__18085__auto__ = bit__18759__auto__;
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
return G__26512.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26512.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26512);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26512);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26514 = arguments.length;
switch (G__26514) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26517 = arguments.length;
switch (G__26517) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26519 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26519);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26519,ret){
return (function (){
return fn1.call(null,val_26519);
});})(val_26519,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26521 = arguments.length;
switch (G__26521) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18970__auto___26523 = n;
var x_26524 = (0);
while(true){
if((x_26524 < n__18970__auto___26523)){
(a[x_26524] = (0));

var G__26525 = (x_26524 + (1));
x_26524 = G__26525;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26526 = (i + (1));
i = G__26526;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26530 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26530 = (function (alt_flag,flag,meta26531){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26531 = meta26531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26532,meta26531__$1){
var self__ = this;
var _26532__$1 = this;
return (new cljs.core.async.t26530(self__.alt_flag,self__.flag,meta26531__$1));
});})(flag))
;

cljs.core.async.t26530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26532){
var self__ = this;
var _26532__$1 = this;
return self__.meta26531;
});})(flag))
;

cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26530.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26531","meta26531",1762015926,null)], null);
});})(flag))
;

cljs.core.async.t26530.cljs$lang$type = true;

cljs.core.async.t26530.cljs$lang$ctorStr = "cljs.core.async/t26530";

cljs.core.async.t26530.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t26530");
});})(flag))
;

cljs.core.async.__GT_t26530 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26530(alt_flag__$1,flag__$1,meta26531){
return (new cljs.core.async.t26530(alt_flag__$1,flag__$1,meta26531));
});})(flag))
;

}

return (new cljs.core.async.t26530(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26536 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26536 = (function (alt_handler,flag,cb,meta26537){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26537 = meta26537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26538,meta26537__$1){
var self__ = this;
var _26538__$1 = this;
return (new cljs.core.async.t26536(self__.alt_handler,self__.flag,self__.cb,meta26537__$1));
});

cljs.core.async.t26536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26538){
var self__ = this;
var _26538__$1 = this;
return self__.meta26537;
});

cljs.core.async.t26536.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26537","meta26537",-951118399,null)], null);
});

cljs.core.async.t26536.cljs$lang$type = true;

cljs.core.async.t26536.cljs$lang$ctorStr = "cljs.core.async/t26536";

cljs.core.async.t26536.cljs$lang$ctorPrWriter = (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t26536");
});

cljs.core.async.__GT_t26536 = (function cljs$core$async$alt_handler_$___GT_t26536(alt_handler__$1,flag__$1,cb__$1,meta26537){
return (new cljs.core.async.t26536(alt_handler__$1,flag__$1,cb__$1,meta26537));
});

}

return (new cljs.core.async.t26536(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26539_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26539_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26540_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26540_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18085__auto__ = wport;
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26541 = (i + (1));
i = G__26541;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18085__auto__ = ret;
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__18073__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18073__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18073__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19125__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19125__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26544){
var map__26545 = p__26544;
var map__26545__$1 = ((cljs.core.seq_QMARK_.call(null,map__26545))?cljs.core.apply.call(null,cljs.core.hash_map,map__26545):map__26545);
var opts = map__26545__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26542){
var G__26543 = cljs.core.first.call(null,seq26542);
var seq26542__$1 = cljs.core.next.call(null,seq26542);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26543,seq26542__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26547 = arguments.length;
switch (G__26547) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21095__auto___26596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___26596){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___26596){
return (function (state_26571){
var state_val_26572 = (state_26571[(1)]);
if((state_val_26572 === (7))){
var inst_26567 = (state_26571[(2)]);
var state_26571__$1 = state_26571;
var statearr_26573_26597 = state_26571__$1;
(statearr_26573_26597[(2)] = inst_26567);

(statearr_26573_26597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (1))){
var state_26571__$1 = state_26571;
var statearr_26574_26598 = state_26571__$1;
(statearr_26574_26598[(2)] = null);

(statearr_26574_26598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (4))){
var inst_26550 = (state_26571[(7)]);
var inst_26550__$1 = (state_26571[(2)]);
var inst_26551 = (inst_26550__$1 == null);
var state_26571__$1 = (function (){var statearr_26575 = state_26571;
(statearr_26575[(7)] = inst_26550__$1);

return statearr_26575;
})();
if(cljs.core.truth_(inst_26551)){
var statearr_26576_26599 = state_26571__$1;
(statearr_26576_26599[(1)] = (5));

} else {
var statearr_26577_26600 = state_26571__$1;
(statearr_26577_26600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (13))){
var state_26571__$1 = state_26571;
var statearr_26578_26601 = state_26571__$1;
(statearr_26578_26601[(2)] = null);

(statearr_26578_26601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (6))){
var inst_26550 = (state_26571[(7)]);
var state_26571__$1 = state_26571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26571__$1,(11),to,inst_26550);
} else {
if((state_val_26572 === (3))){
var inst_26569 = (state_26571[(2)]);
var state_26571__$1 = state_26571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26571__$1,inst_26569);
} else {
if((state_val_26572 === (12))){
var state_26571__$1 = state_26571;
var statearr_26579_26602 = state_26571__$1;
(statearr_26579_26602[(2)] = null);

(statearr_26579_26602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (2))){
var state_26571__$1 = state_26571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26571__$1,(4),from);
} else {
if((state_val_26572 === (11))){
var inst_26560 = (state_26571[(2)]);
var state_26571__$1 = state_26571;
if(cljs.core.truth_(inst_26560)){
var statearr_26580_26603 = state_26571__$1;
(statearr_26580_26603[(1)] = (12));

} else {
var statearr_26581_26604 = state_26571__$1;
(statearr_26581_26604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (9))){
var state_26571__$1 = state_26571;
var statearr_26582_26605 = state_26571__$1;
(statearr_26582_26605[(2)] = null);

(statearr_26582_26605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (5))){
var state_26571__$1 = state_26571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26583_26606 = state_26571__$1;
(statearr_26583_26606[(1)] = (8));

} else {
var statearr_26584_26607 = state_26571__$1;
(statearr_26584_26607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (14))){
var inst_26565 = (state_26571[(2)]);
var state_26571__$1 = state_26571;
var statearr_26585_26608 = state_26571__$1;
(statearr_26585_26608[(2)] = inst_26565);

(statearr_26585_26608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (10))){
var inst_26557 = (state_26571[(2)]);
var state_26571__$1 = state_26571;
var statearr_26586_26609 = state_26571__$1;
(statearr_26586_26609[(2)] = inst_26557);

(statearr_26586_26609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26572 === (8))){
var inst_26554 = cljs.core.async.close_BANG_.call(null,to);
var state_26571__$1 = state_26571;
var statearr_26587_26610 = state_26571__$1;
(statearr_26587_26610[(2)] = inst_26554);

(statearr_26587_26610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___26596))
;
return ((function (switch__21033__auto__,c__21095__auto___26596){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_26591 = [null,null,null,null,null,null,null,null];
(statearr_26591[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_26591[(1)] = (1));

return statearr_26591;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_26571){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_26571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e26592){if((e26592 instanceof Object)){
var ex__21037__auto__ = e26592;
var statearr_26593_26611 = state_26571;
(statearr_26593_26611[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26612 = state_26571;
state_26571 = G__26612;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_26571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_26571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___26596))
})();
var state__21097__auto__ = (function (){var statearr_26594 = f__21096__auto__.call(null);
(statearr_26594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___26596);

return statearr_26594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___26596))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26796){
var vec__26797 = p__26796;
var v = cljs.core.nth.call(null,vec__26797,(0),null);
var p = cljs.core.nth.call(null,vec__26797,(1),null);
var job = vec__26797;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21095__auto___26979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___26979,res,vec__26797,v,p,job,jobs,results){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___26979,res,vec__26797,v,p,job,jobs,results){
return (function (state_26802){
var state_val_26803 = (state_26802[(1)]);
if((state_val_26803 === (1))){
var state_26802__$1 = state_26802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26802__$1,(2),res,v);
} else {
if((state_val_26803 === (2))){
var inst_26799 = (state_26802[(2)]);
var inst_26800 = cljs.core.async.close_BANG_.call(null,res);
var state_26802__$1 = (function (){var statearr_26804 = state_26802;
(statearr_26804[(7)] = inst_26799);

return statearr_26804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26802__$1,inst_26800);
} else {
return null;
}
}
});})(c__21095__auto___26979,res,vec__26797,v,p,job,jobs,results))
;
return ((function (switch__21033__auto__,c__21095__auto___26979,res,vec__26797,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0 = (function (){
var statearr_26808 = [null,null,null,null,null,null,null,null];
(statearr_26808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__);

(statearr_26808[(1)] = (1));

return statearr_26808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1 = (function (state_26802){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_26802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e26809){if((e26809 instanceof Object)){
var ex__21037__auto__ = e26809;
var statearr_26810_26980 = state_26802;
(statearr_26810_26980[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26981 = state_26802;
state_26802 = G__26981;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = function(state_26802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1.call(this,state_26802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___26979,res,vec__26797,v,p,job,jobs,results))
})();
var state__21097__auto__ = (function (){var statearr_26811 = f__21096__auto__.call(null);
(statearr_26811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___26979);

return statearr_26811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___26979,res,vec__26797,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26812){
var vec__26813 = p__26812;
var v = cljs.core.nth.call(null,vec__26813,(0),null);
var p = cljs.core.nth.call(null,vec__26813,(1),null);
var job = vec__26813;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18970__auto___26982 = n;
var __26983 = (0);
while(true){
if((__26983 < n__18970__auto___26982)){
var G__26814_26984 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26814_26984) {
case "compute":
var c__21095__auto___26986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26983,c__21095__auto___26986,G__26814_26984,n__18970__auto___26982,jobs,results,process,async){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (__26983,c__21095__auto___26986,G__26814_26984,n__18970__auto___26982,jobs,results,process,async){
return (function (state_26827){
var state_val_26828 = (state_26827[(1)]);
if((state_val_26828 === (1))){
var state_26827__$1 = state_26827;
var statearr_26829_26987 = state_26827__$1;
(statearr_26829_26987[(2)] = null);

(statearr_26829_26987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (2))){
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26827__$1,(4),jobs);
} else {
if((state_val_26828 === (3))){
var inst_26825 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26827__$1,inst_26825);
} else {
if((state_val_26828 === (4))){
var inst_26817 = (state_26827[(2)]);
var inst_26818 = process.call(null,inst_26817);
var state_26827__$1 = state_26827;
if(cljs.core.truth_(inst_26818)){
var statearr_26830_26988 = state_26827__$1;
(statearr_26830_26988[(1)] = (5));

} else {
var statearr_26831_26989 = state_26827__$1;
(statearr_26831_26989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (5))){
var state_26827__$1 = state_26827;
var statearr_26832_26990 = state_26827__$1;
(statearr_26832_26990[(2)] = null);

(statearr_26832_26990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (6))){
var state_26827__$1 = state_26827;
var statearr_26833_26991 = state_26827__$1;
(statearr_26833_26991[(2)] = null);

(statearr_26833_26991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26828 === (7))){
var inst_26823 = (state_26827[(2)]);
var state_26827__$1 = state_26827;
var statearr_26834_26992 = state_26827__$1;
(statearr_26834_26992[(2)] = inst_26823);

(statearr_26834_26992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26983,c__21095__auto___26986,G__26814_26984,n__18970__auto___26982,jobs,results,process,async))
;
return ((function (__26983,switch__21033__auto__,c__21095__auto___26986,G__26814_26984,n__18970__auto___26982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0 = (function (){
var statearr_26838 = [null,null,null,null,null,null,null];
(statearr_26838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__);

(statearr_26838[(1)] = (1));

return statearr_26838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1 = (function (state_26827){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_26827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e26839){if((e26839 instanceof Object)){
var ex__21037__auto__ = e26839;
var statearr_26840_26993 = state_26827;
(statearr_26840_26993[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26994 = state_26827;
state_26827 = G__26994;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = function(state_26827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1.call(this,state_26827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__;
})()
;})(__26983,switch__21033__auto__,c__21095__auto___26986,G__26814_26984,n__18970__auto___26982,jobs,results,process,async))
})();
var state__21097__auto__ = (function (){var statearr_26841 = f__21096__auto__.call(null);
(statearr_26841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___26986);

return statearr_26841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(__26983,c__21095__auto___26986,G__26814_26984,n__18970__auto___26982,jobs,results,process,async))
);


break;
case "async":
var c__21095__auto___26995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26983,c__21095__auto___26995,G__26814_26984,n__18970__auto___26982,jobs,results,process,async){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (__26983,c__21095__auto___26995,G__26814_26984,n__18970__auto___26982,jobs,results,process,async){
return (function (state_26854){
var state_val_26855 = (state_26854[(1)]);
if((state_val_26855 === (1))){
var state_26854__$1 = state_26854;
var statearr_26856_26996 = state_26854__$1;
(statearr_26856_26996[(2)] = null);

(statearr_26856_26996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (2))){
var state_26854__$1 = state_26854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26854__$1,(4),jobs);
} else {
if((state_val_26855 === (3))){
var inst_26852 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26854__$1,inst_26852);
} else {
if((state_val_26855 === (4))){
var inst_26844 = (state_26854[(2)]);
var inst_26845 = async.call(null,inst_26844);
var state_26854__$1 = state_26854;
if(cljs.core.truth_(inst_26845)){
var statearr_26857_26997 = state_26854__$1;
(statearr_26857_26997[(1)] = (5));

} else {
var statearr_26858_26998 = state_26854__$1;
(statearr_26858_26998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (5))){
var state_26854__$1 = state_26854;
var statearr_26859_26999 = state_26854__$1;
(statearr_26859_26999[(2)] = null);

(statearr_26859_26999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (6))){
var state_26854__$1 = state_26854;
var statearr_26860_27000 = state_26854__$1;
(statearr_26860_27000[(2)] = null);

(statearr_26860_27000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26855 === (7))){
var inst_26850 = (state_26854[(2)]);
var state_26854__$1 = state_26854;
var statearr_26861_27001 = state_26854__$1;
(statearr_26861_27001[(2)] = inst_26850);

(statearr_26861_27001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26983,c__21095__auto___26995,G__26814_26984,n__18970__auto___26982,jobs,results,process,async))
;
return ((function (__26983,switch__21033__auto__,c__21095__auto___26995,G__26814_26984,n__18970__auto___26982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0 = (function (){
var statearr_26865 = [null,null,null,null,null,null,null];
(statearr_26865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__);

(statearr_26865[(1)] = (1));

return statearr_26865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1 = (function (state_26854){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_26854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e26866){if((e26866 instanceof Object)){
var ex__21037__auto__ = e26866;
var statearr_26867_27002 = state_26854;
(statearr_26867_27002[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27003 = state_26854;
state_26854 = G__27003;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = function(state_26854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1.call(this,state_26854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__;
})()
;})(__26983,switch__21033__auto__,c__21095__auto___26995,G__26814_26984,n__18970__auto___26982,jobs,results,process,async))
})();
var state__21097__auto__ = (function (){var statearr_26868 = f__21096__auto__.call(null);
(statearr_26868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___26995);

return statearr_26868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(__26983,c__21095__auto___26995,G__26814_26984,n__18970__auto___26982,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27004 = (__26983 + (1));
__26983 = G__27004;
continue;
} else {
}
break;
}

var c__21095__auto___27005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___27005,jobs,results,process,async){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___27005,jobs,results,process,async){
return (function (state_26890){
var state_val_26891 = (state_26890[(1)]);
if((state_val_26891 === (1))){
var state_26890__$1 = state_26890;
var statearr_26892_27006 = state_26890__$1;
(statearr_26892_27006[(2)] = null);

(statearr_26892_27006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (2))){
var state_26890__$1 = state_26890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26890__$1,(4),from);
} else {
if((state_val_26891 === (3))){
var inst_26888 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26890__$1,inst_26888);
} else {
if((state_val_26891 === (4))){
var inst_26871 = (state_26890[(7)]);
var inst_26871__$1 = (state_26890[(2)]);
var inst_26872 = (inst_26871__$1 == null);
var state_26890__$1 = (function (){var statearr_26893 = state_26890;
(statearr_26893[(7)] = inst_26871__$1);

return statearr_26893;
})();
if(cljs.core.truth_(inst_26872)){
var statearr_26894_27007 = state_26890__$1;
(statearr_26894_27007[(1)] = (5));

} else {
var statearr_26895_27008 = state_26890__$1;
(statearr_26895_27008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (5))){
var inst_26874 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26890__$1 = state_26890;
var statearr_26896_27009 = state_26890__$1;
(statearr_26896_27009[(2)] = inst_26874);

(statearr_26896_27009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (6))){
var inst_26876 = (state_26890[(8)]);
var inst_26871 = (state_26890[(7)]);
var inst_26876__$1 = cljs.core.async.chan.call(null,(1));
var inst_26877 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26878 = [inst_26871,inst_26876__$1];
var inst_26879 = (new cljs.core.PersistentVector(null,2,(5),inst_26877,inst_26878,null));
var state_26890__$1 = (function (){var statearr_26897 = state_26890;
(statearr_26897[(8)] = inst_26876__$1);

return statearr_26897;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26890__$1,(8),jobs,inst_26879);
} else {
if((state_val_26891 === (7))){
var inst_26886 = (state_26890[(2)]);
var state_26890__$1 = state_26890;
var statearr_26898_27010 = state_26890__$1;
(statearr_26898_27010[(2)] = inst_26886);

(statearr_26898_27010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26891 === (8))){
var inst_26876 = (state_26890[(8)]);
var inst_26881 = (state_26890[(2)]);
var state_26890__$1 = (function (){var statearr_26899 = state_26890;
(statearr_26899[(9)] = inst_26881);

return statearr_26899;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26890__$1,(9),results,inst_26876);
} else {
if((state_val_26891 === (9))){
var inst_26883 = (state_26890[(2)]);
var state_26890__$1 = (function (){var statearr_26900 = state_26890;
(statearr_26900[(10)] = inst_26883);

return statearr_26900;
})();
var statearr_26901_27011 = state_26890__$1;
(statearr_26901_27011[(2)] = null);

(statearr_26901_27011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___27005,jobs,results,process,async))
;
return ((function (switch__21033__auto__,c__21095__auto___27005,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0 = (function (){
var statearr_26905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__);

(statearr_26905[(1)] = (1));

return statearr_26905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1 = (function (state_26890){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_26890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e26906){if((e26906 instanceof Object)){
var ex__21037__auto__ = e26906;
var statearr_26907_27012 = state_26890;
(statearr_26907_27012[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27013 = state_26890;
state_26890 = G__27013;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = function(state_26890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1.call(this,state_26890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___27005,jobs,results,process,async))
})();
var state__21097__auto__ = (function (){var statearr_26908 = f__21096__auto__.call(null);
(statearr_26908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___27005);

return statearr_26908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___27005,jobs,results,process,async))
);


var c__21095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto__,jobs,results,process,async){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto__,jobs,results,process,async){
return (function (state_26946){
var state_val_26947 = (state_26946[(1)]);
if((state_val_26947 === (7))){
var inst_26942 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26948_27014 = state_26946__$1;
(statearr_26948_27014[(2)] = inst_26942);

(statearr_26948_27014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (20))){
var state_26946__$1 = state_26946;
var statearr_26949_27015 = state_26946__$1;
(statearr_26949_27015[(2)] = null);

(statearr_26949_27015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (1))){
var state_26946__$1 = state_26946;
var statearr_26950_27016 = state_26946__$1;
(statearr_26950_27016[(2)] = null);

(statearr_26950_27016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (4))){
var inst_26911 = (state_26946[(7)]);
var inst_26911__$1 = (state_26946[(2)]);
var inst_26912 = (inst_26911__$1 == null);
var state_26946__$1 = (function (){var statearr_26951 = state_26946;
(statearr_26951[(7)] = inst_26911__$1);

return statearr_26951;
})();
if(cljs.core.truth_(inst_26912)){
var statearr_26952_27017 = state_26946__$1;
(statearr_26952_27017[(1)] = (5));

} else {
var statearr_26953_27018 = state_26946__$1;
(statearr_26953_27018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (15))){
var inst_26924 = (state_26946[(8)]);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26946__$1,(18),to,inst_26924);
} else {
if((state_val_26947 === (21))){
var inst_26937 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26954_27019 = state_26946__$1;
(statearr_26954_27019[(2)] = inst_26937);

(statearr_26954_27019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (13))){
var inst_26939 = (state_26946[(2)]);
var state_26946__$1 = (function (){var statearr_26955 = state_26946;
(statearr_26955[(9)] = inst_26939);

return statearr_26955;
})();
var statearr_26956_27020 = state_26946__$1;
(statearr_26956_27020[(2)] = null);

(statearr_26956_27020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (6))){
var inst_26911 = (state_26946[(7)]);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26946__$1,(11),inst_26911);
} else {
if((state_val_26947 === (17))){
var inst_26932 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
if(cljs.core.truth_(inst_26932)){
var statearr_26957_27021 = state_26946__$1;
(statearr_26957_27021[(1)] = (19));

} else {
var statearr_26958_27022 = state_26946__$1;
(statearr_26958_27022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (3))){
var inst_26944 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26946__$1,inst_26944);
} else {
if((state_val_26947 === (12))){
var inst_26921 = (state_26946[(10)]);
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26946__$1,(14),inst_26921);
} else {
if((state_val_26947 === (2))){
var state_26946__$1 = state_26946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26946__$1,(4),results);
} else {
if((state_val_26947 === (19))){
var state_26946__$1 = state_26946;
var statearr_26959_27023 = state_26946__$1;
(statearr_26959_27023[(2)] = null);

(statearr_26959_27023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (11))){
var inst_26921 = (state_26946[(2)]);
var state_26946__$1 = (function (){var statearr_26960 = state_26946;
(statearr_26960[(10)] = inst_26921);

return statearr_26960;
})();
var statearr_26961_27024 = state_26946__$1;
(statearr_26961_27024[(2)] = null);

(statearr_26961_27024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (9))){
var state_26946__$1 = state_26946;
var statearr_26962_27025 = state_26946__$1;
(statearr_26962_27025[(2)] = null);

(statearr_26962_27025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (5))){
var state_26946__$1 = state_26946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26963_27026 = state_26946__$1;
(statearr_26963_27026[(1)] = (8));

} else {
var statearr_26964_27027 = state_26946__$1;
(statearr_26964_27027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (14))){
var inst_26926 = (state_26946[(11)]);
var inst_26924 = (state_26946[(8)]);
var inst_26924__$1 = (state_26946[(2)]);
var inst_26925 = (inst_26924__$1 == null);
var inst_26926__$1 = cljs.core.not.call(null,inst_26925);
var state_26946__$1 = (function (){var statearr_26965 = state_26946;
(statearr_26965[(11)] = inst_26926__$1);

(statearr_26965[(8)] = inst_26924__$1);

return statearr_26965;
})();
if(inst_26926__$1){
var statearr_26966_27028 = state_26946__$1;
(statearr_26966_27028[(1)] = (15));

} else {
var statearr_26967_27029 = state_26946__$1;
(statearr_26967_27029[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (16))){
var inst_26926 = (state_26946[(11)]);
var state_26946__$1 = state_26946;
var statearr_26968_27030 = state_26946__$1;
(statearr_26968_27030[(2)] = inst_26926);

(statearr_26968_27030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (10))){
var inst_26918 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26969_27031 = state_26946__$1;
(statearr_26969_27031[(2)] = inst_26918);

(statearr_26969_27031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (18))){
var inst_26929 = (state_26946[(2)]);
var state_26946__$1 = state_26946;
var statearr_26970_27032 = state_26946__$1;
(statearr_26970_27032[(2)] = inst_26929);

(statearr_26970_27032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26947 === (8))){
var inst_26915 = cljs.core.async.close_BANG_.call(null,to);
var state_26946__$1 = state_26946;
var statearr_26971_27033 = state_26946__$1;
(statearr_26971_27033[(2)] = inst_26915);

(statearr_26971_27033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto__,jobs,results,process,async))
;
return ((function (switch__21033__auto__,c__21095__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0 = (function (){
var statearr_26975 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__);

(statearr_26975[(1)] = (1));

return statearr_26975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1 = (function (state_26946){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_26946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e26976){if((e26976 instanceof Object)){
var ex__21037__auto__ = e26976;
var statearr_26977_27034 = state_26946;
(statearr_26977_27034[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27035 = state_26946;
state_26946 = G__27035;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__ = function(state_26946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1.call(this,state_26946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto__,jobs,results,process,async))
})();
var state__21097__auto__ = (function (){var statearr_26978 = f__21096__auto__.call(null);
(statearr_26978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto__);

return statearr_26978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto__,jobs,results,process,async))
);

return c__21095__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27037 = arguments.length;
switch (G__27037) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27040 = arguments.length;
switch (G__27040) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27043 = arguments.length;
switch (G__27043) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21095__auto___27095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___27095,tc,fc){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___27095,tc,fc){
return (function (state_27069){
var state_val_27070 = (state_27069[(1)]);
if((state_val_27070 === (7))){
var inst_27065 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27071_27096 = state_27069__$1;
(statearr_27071_27096[(2)] = inst_27065);

(statearr_27071_27096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (1))){
var state_27069__$1 = state_27069;
var statearr_27072_27097 = state_27069__$1;
(statearr_27072_27097[(2)] = null);

(statearr_27072_27097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (4))){
var inst_27046 = (state_27069[(7)]);
var inst_27046__$1 = (state_27069[(2)]);
var inst_27047 = (inst_27046__$1 == null);
var state_27069__$1 = (function (){var statearr_27073 = state_27069;
(statearr_27073[(7)] = inst_27046__$1);

return statearr_27073;
})();
if(cljs.core.truth_(inst_27047)){
var statearr_27074_27098 = state_27069__$1;
(statearr_27074_27098[(1)] = (5));

} else {
var statearr_27075_27099 = state_27069__$1;
(statearr_27075_27099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (13))){
var state_27069__$1 = state_27069;
var statearr_27076_27100 = state_27069__$1;
(statearr_27076_27100[(2)] = null);

(statearr_27076_27100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (6))){
var inst_27046 = (state_27069[(7)]);
var inst_27052 = p.call(null,inst_27046);
var state_27069__$1 = state_27069;
if(cljs.core.truth_(inst_27052)){
var statearr_27077_27101 = state_27069__$1;
(statearr_27077_27101[(1)] = (9));

} else {
var statearr_27078_27102 = state_27069__$1;
(statearr_27078_27102[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (3))){
var inst_27067 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27069__$1,inst_27067);
} else {
if((state_val_27070 === (12))){
var state_27069__$1 = state_27069;
var statearr_27079_27103 = state_27069__$1;
(statearr_27079_27103[(2)] = null);

(statearr_27079_27103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (2))){
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27069__$1,(4),ch);
} else {
if((state_val_27070 === (11))){
var inst_27046 = (state_27069[(7)]);
var inst_27056 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27069__$1,(8),inst_27056,inst_27046);
} else {
if((state_val_27070 === (9))){
var state_27069__$1 = state_27069;
var statearr_27080_27104 = state_27069__$1;
(statearr_27080_27104[(2)] = tc);

(statearr_27080_27104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (5))){
var inst_27049 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27050 = cljs.core.async.close_BANG_.call(null,fc);
var state_27069__$1 = (function (){var statearr_27081 = state_27069;
(statearr_27081[(8)] = inst_27049);

return statearr_27081;
})();
var statearr_27082_27105 = state_27069__$1;
(statearr_27082_27105[(2)] = inst_27050);

(statearr_27082_27105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (14))){
var inst_27063 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27083_27106 = state_27069__$1;
(statearr_27083_27106[(2)] = inst_27063);

(statearr_27083_27106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (10))){
var state_27069__$1 = state_27069;
var statearr_27084_27107 = state_27069__$1;
(statearr_27084_27107[(2)] = fc);

(statearr_27084_27107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (8))){
var inst_27058 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
if(cljs.core.truth_(inst_27058)){
var statearr_27085_27108 = state_27069__$1;
(statearr_27085_27108[(1)] = (12));

} else {
var statearr_27086_27109 = state_27069__$1;
(statearr_27086_27109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___27095,tc,fc))
;
return ((function (switch__21033__auto__,c__21095__auto___27095,tc,fc){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_27090 = [null,null,null,null,null,null,null,null,null];
(statearr_27090[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_27090[(1)] = (1));

return statearr_27090;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_27069){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_27069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e27091){if((e27091 instanceof Object)){
var ex__21037__auto__ = e27091;
var statearr_27092_27110 = state_27069;
(statearr_27092_27110[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27111 = state_27069;
state_27069 = G__27111;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_27069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_27069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___27095,tc,fc))
})();
var state__21097__auto__ = (function (){var statearr_27093 = f__21096__auto__.call(null);
(statearr_27093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___27095);

return statearr_27093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___27095,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto__){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto__){
return (function (state_27158){
var state_val_27159 = (state_27158[(1)]);
if((state_val_27159 === (1))){
var inst_27144 = init;
var state_27158__$1 = (function (){var statearr_27160 = state_27158;
(statearr_27160[(7)] = inst_27144);

return statearr_27160;
})();
var statearr_27161_27176 = state_27158__$1;
(statearr_27161_27176[(2)] = null);

(statearr_27161_27176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (2))){
var state_27158__$1 = state_27158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27158__$1,(4),ch);
} else {
if((state_val_27159 === (3))){
var inst_27156 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27158__$1,inst_27156);
} else {
if((state_val_27159 === (4))){
var inst_27147 = (state_27158[(8)]);
var inst_27147__$1 = (state_27158[(2)]);
var inst_27148 = (inst_27147__$1 == null);
var state_27158__$1 = (function (){var statearr_27162 = state_27158;
(statearr_27162[(8)] = inst_27147__$1);

return statearr_27162;
})();
if(cljs.core.truth_(inst_27148)){
var statearr_27163_27177 = state_27158__$1;
(statearr_27163_27177[(1)] = (5));

} else {
var statearr_27164_27178 = state_27158__$1;
(statearr_27164_27178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (5))){
var inst_27144 = (state_27158[(7)]);
var state_27158__$1 = state_27158;
var statearr_27165_27179 = state_27158__$1;
(statearr_27165_27179[(2)] = inst_27144);

(statearr_27165_27179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (6))){
var inst_27144 = (state_27158[(7)]);
var inst_27147 = (state_27158[(8)]);
var inst_27151 = f.call(null,inst_27144,inst_27147);
var inst_27144__$1 = inst_27151;
var state_27158__$1 = (function (){var statearr_27166 = state_27158;
(statearr_27166[(7)] = inst_27144__$1);

return statearr_27166;
})();
var statearr_27167_27180 = state_27158__$1;
(statearr_27167_27180[(2)] = null);

(statearr_27167_27180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27159 === (7))){
var inst_27154 = (state_27158[(2)]);
var state_27158__$1 = state_27158;
var statearr_27168_27181 = state_27158__$1;
(statearr_27168_27181[(2)] = inst_27154);

(statearr_27168_27181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21095__auto__))
;
return ((function (switch__21033__auto__,c__21095__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21034__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21034__auto____0 = (function (){
var statearr_27172 = [null,null,null,null,null,null,null,null,null];
(statearr_27172[(0)] = cljs$core$async$reduce_$_state_machine__21034__auto__);

(statearr_27172[(1)] = (1));

return statearr_27172;
});
var cljs$core$async$reduce_$_state_machine__21034__auto____1 = (function (state_27158){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_27158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e27173){if((e27173 instanceof Object)){
var ex__21037__auto__ = e27173;
var statearr_27174_27182 = state_27158;
(statearr_27174_27182[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27183 = state_27158;
state_27158 = G__27183;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21034__auto__ = function(state_27158){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21034__auto____1.call(this,state_27158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21034__auto____0;
cljs$core$async$reduce_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21034__auto____1;
return cljs$core$async$reduce_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto__))
})();
var state__21097__auto__ = (function (){var statearr_27175 = f__21096__auto__.call(null);
(statearr_27175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto__);

return statearr_27175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto__))
);

return c__21095__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27185 = arguments.length;
switch (G__27185) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto__){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto__){
return (function (state_27210){
var state_val_27211 = (state_27210[(1)]);
if((state_val_27211 === (7))){
var inst_27192 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27212_27236 = state_27210__$1;
(statearr_27212_27236[(2)] = inst_27192);

(statearr_27212_27236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (1))){
var inst_27186 = cljs.core.seq.call(null,coll);
var inst_27187 = inst_27186;
var state_27210__$1 = (function (){var statearr_27213 = state_27210;
(statearr_27213[(7)] = inst_27187);

return statearr_27213;
})();
var statearr_27214_27237 = state_27210__$1;
(statearr_27214_27237[(2)] = null);

(statearr_27214_27237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (4))){
var inst_27187 = (state_27210[(7)]);
var inst_27190 = cljs.core.first.call(null,inst_27187);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27210__$1,(7),ch,inst_27190);
} else {
if((state_val_27211 === (13))){
var inst_27204 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27215_27238 = state_27210__$1;
(statearr_27215_27238[(2)] = inst_27204);

(statearr_27215_27238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (6))){
var inst_27195 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27195)){
var statearr_27216_27239 = state_27210__$1;
(statearr_27216_27239[(1)] = (8));

} else {
var statearr_27217_27240 = state_27210__$1;
(statearr_27217_27240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (3))){
var inst_27208 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27210__$1,inst_27208);
} else {
if((state_val_27211 === (12))){
var state_27210__$1 = state_27210;
var statearr_27218_27241 = state_27210__$1;
(statearr_27218_27241[(2)] = null);

(statearr_27218_27241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (2))){
var inst_27187 = (state_27210[(7)]);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27187)){
var statearr_27219_27242 = state_27210__$1;
(statearr_27219_27242[(1)] = (4));

} else {
var statearr_27220_27243 = state_27210__$1;
(statearr_27220_27243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (11))){
var inst_27201 = cljs.core.async.close_BANG_.call(null,ch);
var state_27210__$1 = state_27210;
var statearr_27221_27244 = state_27210__$1;
(statearr_27221_27244[(2)] = inst_27201);

(statearr_27221_27244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (9))){
var state_27210__$1 = state_27210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27222_27245 = state_27210__$1;
(statearr_27222_27245[(1)] = (11));

} else {
var statearr_27223_27246 = state_27210__$1;
(statearr_27223_27246[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (5))){
var inst_27187 = (state_27210[(7)]);
var state_27210__$1 = state_27210;
var statearr_27224_27247 = state_27210__$1;
(statearr_27224_27247[(2)] = inst_27187);

(statearr_27224_27247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (10))){
var inst_27206 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27225_27248 = state_27210__$1;
(statearr_27225_27248[(2)] = inst_27206);

(statearr_27225_27248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (8))){
var inst_27187 = (state_27210[(7)]);
var inst_27197 = cljs.core.next.call(null,inst_27187);
var inst_27187__$1 = inst_27197;
var state_27210__$1 = (function (){var statearr_27226 = state_27210;
(statearr_27226[(7)] = inst_27187__$1);

return statearr_27226;
})();
var statearr_27227_27249 = state_27210__$1;
(statearr_27227_27249[(2)] = null);

(statearr_27227_27249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto__))
;
return ((function (switch__21033__auto__,c__21095__auto__){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_27231 = [null,null,null,null,null,null,null,null];
(statearr_27231[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_27231[(1)] = (1));

return statearr_27231;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_27210){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_27210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e27232){if((e27232 instanceof Object)){
var ex__21037__auto__ = e27232;
var statearr_27233_27250 = state_27210;
(statearr_27233_27250[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27251 = state_27210;
state_27210 = G__27251;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_27210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_27210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto__))
})();
var state__21097__auto__ = (function (){var statearr_27234 = f__21096__auto__.call(null);
(statearr_27234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto__);

return statearr_27234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto__))
);

return c__21095__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27253 = {};
return obj27253;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18073__auto__ = _;
if(and__18073__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18073__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18721__auto__ = (((_ == null))?null:_);
return (function (){var or__18085__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27255 = {};
return obj27255;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18073__auto__ = m;
if(and__18073__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18073__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18721__auto__ = (((m == null))?null:m);
return (function (){var or__18085__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18073__auto__ = m;
if(and__18073__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18073__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18721__auto__ = (((m == null))?null:m);
return (function (){var or__18085__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18073__auto__ = m;
if(and__18073__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18073__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18721__auto__ = (((m == null))?null:m);
return (function (){var or__18085__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27477 = (function (mult,ch,cs,meta27478){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27478 = meta27478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27479,meta27478__$1){
var self__ = this;
var _27479__$1 = this;
return (new cljs.core.async.t27477(self__.mult,self__.ch,self__.cs,meta27478__$1));
});})(cs))
;

cljs.core.async.t27477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27479){
var self__ = this;
var _27479__$1 = this;
return self__.meta27478;
});})(cs))
;

cljs.core.async.t27477.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27477.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27477.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27477.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27477.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27477.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27478","meta27478",1948864285,null)], null);
});})(cs))
;

cljs.core.async.t27477.cljs$lang$type = true;

cljs.core.async.t27477.cljs$lang$ctorStr = "cljs.core.async/t27477";

cljs.core.async.t27477.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t27477");
});})(cs))
;

cljs.core.async.__GT_t27477 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27477(mult__$1,ch__$1,cs__$1,meta27478){
return (new cljs.core.async.t27477(mult__$1,ch__$1,cs__$1,meta27478));
});})(cs))
;

}

return (new cljs.core.async.t27477(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21095__auto___27698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___27698,cs,m,dchan,dctr,done){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___27698,cs,m,dchan,dctr,done){
return (function (state_27610){
var state_val_27611 = (state_27610[(1)]);
if((state_val_27611 === (7))){
var inst_27606 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27612_27699 = state_27610__$1;
(statearr_27612_27699[(2)] = inst_27606);

(statearr_27612_27699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (20))){
var inst_27511 = (state_27610[(7)]);
var inst_27521 = cljs.core.first.call(null,inst_27511);
var inst_27522 = cljs.core.nth.call(null,inst_27521,(0),null);
var inst_27523 = cljs.core.nth.call(null,inst_27521,(1),null);
var state_27610__$1 = (function (){var statearr_27613 = state_27610;
(statearr_27613[(8)] = inst_27522);

return statearr_27613;
})();
if(cljs.core.truth_(inst_27523)){
var statearr_27614_27700 = state_27610__$1;
(statearr_27614_27700[(1)] = (22));

} else {
var statearr_27615_27701 = state_27610__$1;
(statearr_27615_27701[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (27))){
var inst_27482 = (state_27610[(9)]);
var inst_27551 = (state_27610[(10)]);
var inst_27558 = (state_27610[(11)]);
var inst_27553 = (state_27610[(12)]);
var inst_27558__$1 = cljs.core._nth.call(null,inst_27551,inst_27553);
var inst_27559 = cljs.core.async.put_BANG_.call(null,inst_27558__$1,inst_27482,done);
var state_27610__$1 = (function (){var statearr_27616 = state_27610;
(statearr_27616[(11)] = inst_27558__$1);

return statearr_27616;
})();
if(cljs.core.truth_(inst_27559)){
var statearr_27617_27702 = state_27610__$1;
(statearr_27617_27702[(1)] = (30));

} else {
var statearr_27618_27703 = state_27610__$1;
(statearr_27618_27703[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (1))){
var state_27610__$1 = state_27610;
var statearr_27619_27704 = state_27610__$1;
(statearr_27619_27704[(2)] = null);

(statearr_27619_27704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (24))){
var inst_27511 = (state_27610[(7)]);
var inst_27528 = (state_27610[(2)]);
var inst_27529 = cljs.core.next.call(null,inst_27511);
var inst_27491 = inst_27529;
var inst_27492 = null;
var inst_27493 = (0);
var inst_27494 = (0);
var state_27610__$1 = (function (){var statearr_27620 = state_27610;
(statearr_27620[(13)] = inst_27492);

(statearr_27620[(14)] = inst_27491);

(statearr_27620[(15)] = inst_27494);

(statearr_27620[(16)] = inst_27493);

(statearr_27620[(17)] = inst_27528);

return statearr_27620;
})();
var statearr_27621_27705 = state_27610__$1;
(statearr_27621_27705[(2)] = null);

(statearr_27621_27705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (39))){
var state_27610__$1 = state_27610;
var statearr_27625_27706 = state_27610__$1;
(statearr_27625_27706[(2)] = null);

(statearr_27625_27706[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (4))){
var inst_27482 = (state_27610[(9)]);
var inst_27482__$1 = (state_27610[(2)]);
var inst_27483 = (inst_27482__$1 == null);
var state_27610__$1 = (function (){var statearr_27626 = state_27610;
(statearr_27626[(9)] = inst_27482__$1);

return statearr_27626;
})();
if(cljs.core.truth_(inst_27483)){
var statearr_27627_27707 = state_27610__$1;
(statearr_27627_27707[(1)] = (5));

} else {
var statearr_27628_27708 = state_27610__$1;
(statearr_27628_27708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (15))){
var inst_27492 = (state_27610[(13)]);
var inst_27491 = (state_27610[(14)]);
var inst_27494 = (state_27610[(15)]);
var inst_27493 = (state_27610[(16)]);
var inst_27507 = (state_27610[(2)]);
var inst_27508 = (inst_27494 + (1));
var tmp27622 = inst_27492;
var tmp27623 = inst_27491;
var tmp27624 = inst_27493;
var inst_27491__$1 = tmp27623;
var inst_27492__$1 = tmp27622;
var inst_27493__$1 = tmp27624;
var inst_27494__$1 = inst_27508;
var state_27610__$1 = (function (){var statearr_27629 = state_27610;
(statearr_27629[(13)] = inst_27492__$1);

(statearr_27629[(14)] = inst_27491__$1);

(statearr_27629[(15)] = inst_27494__$1);

(statearr_27629[(16)] = inst_27493__$1);

(statearr_27629[(18)] = inst_27507);

return statearr_27629;
})();
var statearr_27630_27709 = state_27610__$1;
(statearr_27630_27709[(2)] = null);

(statearr_27630_27709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (21))){
var inst_27532 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27634_27710 = state_27610__$1;
(statearr_27634_27710[(2)] = inst_27532);

(statearr_27634_27710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (31))){
var inst_27558 = (state_27610[(11)]);
var inst_27562 = done.call(null,null);
var inst_27563 = cljs.core.async.untap_STAR_.call(null,m,inst_27558);
var state_27610__$1 = (function (){var statearr_27635 = state_27610;
(statearr_27635[(19)] = inst_27562);

return statearr_27635;
})();
var statearr_27636_27711 = state_27610__$1;
(statearr_27636_27711[(2)] = inst_27563);

(statearr_27636_27711[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (32))){
var inst_27551 = (state_27610[(10)]);
var inst_27552 = (state_27610[(20)]);
var inst_27550 = (state_27610[(21)]);
var inst_27553 = (state_27610[(12)]);
var inst_27565 = (state_27610[(2)]);
var inst_27566 = (inst_27553 + (1));
var tmp27631 = inst_27551;
var tmp27632 = inst_27552;
var tmp27633 = inst_27550;
var inst_27550__$1 = tmp27633;
var inst_27551__$1 = tmp27631;
var inst_27552__$1 = tmp27632;
var inst_27553__$1 = inst_27566;
var state_27610__$1 = (function (){var statearr_27637 = state_27610;
(statearr_27637[(10)] = inst_27551__$1);

(statearr_27637[(20)] = inst_27552__$1);

(statearr_27637[(22)] = inst_27565);

(statearr_27637[(21)] = inst_27550__$1);

(statearr_27637[(12)] = inst_27553__$1);

return statearr_27637;
})();
var statearr_27638_27712 = state_27610__$1;
(statearr_27638_27712[(2)] = null);

(statearr_27638_27712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (40))){
var inst_27578 = (state_27610[(23)]);
var inst_27582 = done.call(null,null);
var inst_27583 = cljs.core.async.untap_STAR_.call(null,m,inst_27578);
var state_27610__$1 = (function (){var statearr_27639 = state_27610;
(statearr_27639[(24)] = inst_27582);

return statearr_27639;
})();
var statearr_27640_27713 = state_27610__$1;
(statearr_27640_27713[(2)] = inst_27583);

(statearr_27640_27713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (33))){
var inst_27569 = (state_27610[(25)]);
var inst_27571 = cljs.core.chunked_seq_QMARK_.call(null,inst_27569);
var state_27610__$1 = state_27610;
if(inst_27571){
var statearr_27641_27714 = state_27610__$1;
(statearr_27641_27714[(1)] = (36));

} else {
var statearr_27642_27715 = state_27610__$1;
(statearr_27642_27715[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (13))){
var inst_27501 = (state_27610[(26)]);
var inst_27504 = cljs.core.async.close_BANG_.call(null,inst_27501);
var state_27610__$1 = state_27610;
var statearr_27643_27716 = state_27610__$1;
(statearr_27643_27716[(2)] = inst_27504);

(statearr_27643_27716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (22))){
var inst_27522 = (state_27610[(8)]);
var inst_27525 = cljs.core.async.close_BANG_.call(null,inst_27522);
var state_27610__$1 = state_27610;
var statearr_27644_27717 = state_27610__$1;
(statearr_27644_27717[(2)] = inst_27525);

(statearr_27644_27717[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (36))){
var inst_27569 = (state_27610[(25)]);
var inst_27573 = cljs.core.chunk_first.call(null,inst_27569);
var inst_27574 = cljs.core.chunk_rest.call(null,inst_27569);
var inst_27575 = cljs.core.count.call(null,inst_27573);
var inst_27550 = inst_27574;
var inst_27551 = inst_27573;
var inst_27552 = inst_27575;
var inst_27553 = (0);
var state_27610__$1 = (function (){var statearr_27645 = state_27610;
(statearr_27645[(10)] = inst_27551);

(statearr_27645[(20)] = inst_27552);

(statearr_27645[(21)] = inst_27550);

(statearr_27645[(12)] = inst_27553);

return statearr_27645;
})();
var statearr_27646_27718 = state_27610__$1;
(statearr_27646_27718[(2)] = null);

(statearr_27646_27718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (41))){
var inst_27569 = (state_27610[(25)]);
var inst_27585 = (state_27610[(2)]);
var inst_27586 = cljs.core.next.call(null,inst_27569);
var inst_27550 = inst_27586;
var inst_27551 = null;
var inst_27552 = (0);
var inst_27553 = (0);
var state_27610__$1 = (function (){var statearr_27647 = state_27610;
(statearr_27647[(10)] = inst_27551);

(statearr_27647[(20)] = inst_27552);

(statearr_27647[(27)] = inst_27585);

(statearr_27647[(21)] = inst_27550);

(statearr_27647[(12)] = inst_27553);

return statearr_27647;
})();
var statearr_27648_27719 = state_27610__$1;
(statearr_27648_27719[(2)] = null);

(statearr_27648_27719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (43))){
var state_27610__$1 = state_27610;
var statearr_27649_27720 = state_27610__$1;
(statearr_27649_27720[(2)] = null);

(statearr_27649_27720[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (29))){
var inst_27594 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27650_27721 = state_27610__$1;
(statearr_27650_27721[(2)] = inst_27594);

(statearr_27650_27721[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (44))){
var inst_27603 = (state_27610[(2)]);
var state_27610__$1 = (function (){var statearr_27651 = state_27610;
(statearr_27651[(28)] = inst_27603);

return statearr_27651;
})();
var statearr_27652_27722 = state_27610__$1;
(statearr_27652_27722[(2)] = null);

(statearr_27652_27722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (6))){
var inst_27542 = (state_27610[(29)]);
var inst_27541 = cljs.core.deref.call(null,cs);
var inst_27542__$1 = cljs.core.keys.call(null,inst_27541);
var inst_27543 = cljs.core.count.call(null,inst_27542__$1);
var inst_27544 = cljs.core.reset_BANG_.call(null,dctr,inst_27543);
var inst_27549 = cljs.core.seq.call(null,inst_27542__$1);
var inst_27550 = inst_27549;
var inst_27551 = null;
var inst_27552 = (0);
var inst_27553 = (0);
var state_27610__$1 = (function (){var statearr_27653 = state_27610;
(statearr_27653[(10)] = inst_27551);

(statearr_27653[(29)] = inst_27542__$1);

(statearr_27653[(20)] = inst_27552);

(statearr_27653[(30)] = inst_27544);

(statearr_27653[(21)] = inst_27550);

(statearr_27653[(12)] = inst_27553);

return statearr_27653;
})();
var statearr_27654_27723 = state_27610__$1;
(statearr_27654_27723[(2)] = null);

(statearr_27654_27723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (28))){
var inst_27569 = (state_27610[(25)]);
var inst_27550 = (state_27610[(21)]);
var inst_27569__$1 = cljs.core.seq.call(null,inst_27550);
var state_27610__$1 = (function (){var statearr_27655 = state_27610;
(statearr_27655[(25)] = inst_27569__$1);

return statearr_27655;
})();
if(inst_27569__$1){
var statearr_27656_27724 = state_27610__$1;
(statearr_27656_27724[(1)] = (33));

} else {
var statearr_27657_27725 = state_27610__$1;
(statearr_27657_27725[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (25))){
var inst_27552 = (state_27610[(20)]);
var inst_27553 = (state_27610[(12)]);
var inst_27555 = (inst_27553 < inst_27552);
var inst_27556 = inst_27555;
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27556)){
var statearr_27658_27726 = state_27610__$1;
(statearr_27658_27726[(1)] = (27));

} else {
var statearr_27659_27727 = state_27610__$1;
(statearr_27659_27727[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (34))){
var state_27610__$1 = state_27610;
var statearr_27660_27728 = state_27610__$1;
(statearr_27660_27728[(2)] = null);

(statearr_27660_27728[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (17))){
var state_27610__$1 = state_27610;
var statearr_27661_27729 = state_27610__$1;
(statearr_27661_27729[(2)] = null);

(statearr_27661_27729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (3))){
var inst_27608 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27610__$1,inst_27608);
} else {
if((state_val_27611 === (12))){
var inst_27537 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27662_27730 = state_27610__$1;
(statearr_27662_27730[(2)] = inst_27537);

(statearr_27662_27730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (2))){
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27610__$1,(4),ch);
} else {
if((state_val_27611 === (23))){
var state_27610__$1 = state_27610;
var statearr_27663_27731 = state_27610__$1;
(statearr_27663_27731[(2)] = null);

(statearr_27663_27731[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (35))){
var inst_27592 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27664_27732 = state_27610__$1;
(statearr_27664_27732[(2)] = inst_27592);

(statearr_27664_27732[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (19))){
var inst_27511 = (state_27610[(7)]);
var inst_27515 = cljs.core.chunk_first.call(null,inst_27511);
var inst_27516 = cljs.core.chunk_rest.call(null,inst_27511);
var inst_27517 = cljs.core.count.call(null,inst_27515);
var inst_27491 = inst_27516;
var inst_27492 = inst_27515;
var inst_27493 = inst_27517;
var inst_27494 = (0);
var state_27610__$1 = (function (){var statearr_27665 = state_27610;
(statearr_27665[(13)] = inst_27492);

(statearr_27665[(14)] = inst_27491);

(statearr_27665[(15)] = inst_27494);

(statearr_27665[(16)] = inst_27493);

return statearr_27665;
})();
var statearr_27666_27733 = state_27610__$1;
(statearr_27666_27733[(2)] = null);

(statearr_27666_27733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (11))){
var inst_27491 = (state_27610[(14)]);
var inst_27511 = (state_27610[(7)]);
var inst_27511__$1 = cljs.core.seq.call(null,inst_27491);
var state_27610__$1 = (function (){var statearr_27667 = state_27610;
(statearr_27667[(7)] = inst_27511__$1);

return statearr_27667;
})();
if(inst_27511__$1){
var statearr_27668_27734 = state_27610__$1;
(statearr_27668_27734[(1)] = (16));

} else {
var statearr_27669_27735 = state_27610__$1;
(statearr_27669_27735[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (9))){
var inst_27539 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27670_27736 = state_27610__$1;
(statearr_27670_27736[(2)] = inst_27539);

(statearr_27670_27736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (5))){
var inst_27489 = cljs.core.deref.call(null,cs);
var inst_27490 = cljs.core.seq.call(null,inst_27489);
var inst_27491 = inst_27490;
var inst_27492 = null;
var inst_27493 = (0);
var inst_27494 = (0);
var state_27610__$1 = (function (){var statearr_27671 = state_27610;
(statearr_27671[(13)] = inst_27492);

(statearr_27671[(14)] = inst_27491);

(statearr_27671[(15)] = inst_27494);

(statearr_27671[(16)] = inst_27493);

return statearr_27671;
})();
var statearr_27672_27737 = state_27610__$1;
(statearr_27672_27737[(2)] = null);

(statearr_27672_27737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (14))){
var state_27610__$1 = state_27610;
var statearr_27673_27738 = state_27610__$1;
(statearr_27673_27738[(2)] = null);

(statearr_27673_27738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (45))){
var inst_27600 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27674_27739 = state_27610__$1;
(statearr_27674_27739[(2)] = inst_27600);

(statearr_27674_27739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (26))){
var inst_27542 = (state_27610[(29)]);
var inst_27596 = (state_27610[(2)]);
var inst_27597 = cljs.core.seq.call(null,inst_27542);
var state_27610__$1 = (function (){var statearr_27675 = state_27610;
(statearr_27675[(31)] = inst_27596);

return statearr_27675;
})();
if(inst_27597){
var statearr_27676_27740 = state_27610__$1;
(statearr_27676_27740[(1)] = (42));

} else {
var statearr_27677_27741 = state_27610__$1;
(statearr_27677_27741[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (16))){
var inst_27511 = (state_27610[(7)]);
var inst_27513 = cljs.core.chunked_seq_QMARK_.call(null,inst_27511);
var state_27610__$1 = state_27610;
if(inst_27513){
var statearr_27678_27742 = state_27610__$1;
(statearr_27678_27742[(1)] = (19));

} else {
var statearr_27679_27743 = state_27610__$1;
(statearr_27679_27743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (38))){
var inst_27589 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27680_27744 = state_27610__$1;
(statearr_27680_27744[(2)] = inst_27589);

(statearr_27680_27744[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (30))){
var state_27610__$1 = state_27610;
var statearr_27681_27745 = state_27610__$1;
(statearr_27681_27745[(2)] = null);

(statearr_27681_27745[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (10))){
var inst_27492 = (state_27610[(13)]);
var inst_27494 = (state_27610[(15)]);
var inst_27500 = cljs.core._nth.call(null,inst_27492,inst_27494);
var inst_27501 = cljs.core.nth.call(null,inst_27500,(0),null);
var inst_27502 = cljs.core.nth.call(null,inst_27500,(1),null);
var state_27610__$1 = (function (){var statearr_27682 = state_27610;
(statearr_27682[(26)] = inst_27501);

return statearr_27682;
})();
if(cljs.core.truth_(inst_27502)){
var statearr_27683_27746 = state_27610__$1;
(statearr_27683_27746[(1)] = (13));

} else {
var statearr_27684_27747 = state_27610__$1;
(statearr_27684_27747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (18))){
var inst_27535 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27685_27748 = state_27610__$1;
(statearr_27685_27748[(2)] = inst_27535);

(statearr_27685_27748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (42))){
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27610__$1,(45),dchan);
} else {
if((state_val_27611 === (37))){
var inst_27482 = (state_27610[(9)]);
var inst_27578 = (state_27610[(23)]);
var inst_27569 = (state_27610[(25)]);
var inst_27578__$1 = cljs.core.first.call(null,inst_27569);
var inst_27579 = cljs.core.async.put_BANG_.call(null,inst_27578__$1,inst_27482,done);
var state_27610__$1 = (function (){var statearr_27686 = state_27610;
(statearr_27686[(23)] = inst_27578__$1);

return statearr_27686;
})();
if(cljs.core.truth_(inst_27579)){
var statearr_27687_27749 = state_27610__$1;
(statearr_27687_27749[(1)] = (39));

} else {
var statearr_27688_27750 = state_27610__$1;
(statearr_27688_27750[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (8))){
var inst_27494 = (state_27610[(15)]);
var inst_27493 = (state_27610[(16)]);
var inst_27496 = (inst_27494 < inst_27493);
var inst_27497 = inst_27496;
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27497)){
var statearr_27689_27751 = state_27610__$1;
(statearr_27689_27751[(1)] = (10));

} else {
var statearr_27690_27752 = state_27610__$1;
(statearr_27690_27752[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___27698,cs,m,dchan,dctr,done))
;
return ((function (switch__21033__auto__,c__21095__auto___27698,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21034__auto__ = null;
var cljs$core$async$mult_$_state_machine__21034__auto____0 = (function (){
var statearr_27694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27694[(0)] = cljs$core$async$mult_$_state_machine__21034__auto__);

(statearr_27694[(1)] = (1));

return statearr_27694;
});
var cljs$core$async$mult_$_state_machine__21034__auto____1 = (function (state_27610){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_27610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e27695){if((e27695 instanceof Object)){
var ex__21037__auto__ = e27695;
var statearr_27696_27753 = state_27610;
(statearr_27696_27753[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27754 = state_27610;
state_27610 = G__27754;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21034__auto__ = function(state_27610){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21034__auto____1.call(this,state_27610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21034__auto____0;
cljs$core$async$mult_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21034__auto____1;
return cljs$core$async$mult_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___27698,cs,m,dchan,dctr,done))
})();
var state__21097__auto__ = (function (){var statearr_27697 = f__21096__auto__.call(null);
(statearr_27697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___27698);

return statearr_27697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___27698,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27756 = arguments.length;
switch (G__27756) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27759 = {};
return obj27759;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18073__auto__ = m;
if(and__18073__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18073__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18721__auto__ = (((m == null))?null:m);
return (function (){var or__18085__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18073__auto__ = m;
if(and__18073__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18073__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18721__auto__ = (((m == null))?null:m);
return (function (){var or__18085__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18073__auto__ = m;
if(and__18073__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18073__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18721__auto__ = (((m == null))?null:m);
return (function (){var or__18085__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18073__auto__ = m;
if(and__18073__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18073__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18721__auto__ = (((m == null))?null:m);
return (function (){var or__18085__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18073__auto__ = m;
if(and__18073__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18073__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18721__auto__ = (((m == null))?null:m);
return (function (){var or__18085__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19125__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19125__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27764){
var map__27765 = p__27764;
var map__27765__$1 = ((cljs.core.seq_QMARK_.call(null,map__27765))?cljs.core.apply.call(null,cljs.core.hash_map,map__27765):map__27765);
var opts = map__27765__$1;
var statearr_27766_27769 = state;
(statearr_27766_27769[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__27765,map__27765__$1,opts){
return (function (val){
var statearr_27767_27770 = state;
(statearr_27767_27770[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27765,map__27765__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_27768_27771 = state;
(statearr_27768_27771[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27760){
var G__27761 = cljs.core.first.call(null,seq27760);
var seq27760__$1 = cljs.core.next.call(null,seq27760);
var G__27762 = cljs.core.first.call(null,seq27760__$1);
var seq27760__$2 = cljs.core.next.call(null,seq27760__$1);
var G__27763 = cljs.core.first.call(null,seq27760__$2);
var seq27760__$3 = cljs.core.next.call(null,seq27760__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27761,G__27762,G__27763,seq27760__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27891 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27891 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27892){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27892 = meta27892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27893,meta27892__$1){
var self__ = this;
var _27893__$1 = this;
return (new cljs.core.async.t27891(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27892__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27893){
var self__ = this;
var _27893__$1 = this;
return self__.meta27892;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27892","meta27892",-1418131704,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27891.cljs$lang$type = true;

cljs.core.async.t27891.cljs$lang$ctorStr = "cljs.core.async/t27891";

cljs.core.async.t27891.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t27891");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27891 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27891(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27892){
return (new cljs.core.async.t27891(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27892));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27891(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21095__auto___28010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27963){
var state_val_27964 = (state_27963[(1)]);
if((state_val_27964 === (7))){
var inst_27907 = (state_27963[(7)]);
var inst_27912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27907);
var state_27963__$1 = state_27963;
var statearr_27965_28011 = state_27963__$1;
(statearr_27965_28011[(2)] = inst_27912);

(statearr_27965_28011[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (20))){
var inst_27922 = (state_27963[(8)]);
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27963__$1,(23),out,inst_27922);
} else {
if((state_val_27964 === (1))){
var inst_27897 = (state_27963[(9)]);
var inst_27897__$1 = calc_state.call(null);
var inst_27898 = cljs.core.seq_QMARK_.call(null,inst_27897__$1);
var state_27963__$1 = (function (){var statearr_27966 = state_27963;
(statearr_27966[(9)] = inst_27897__$1);

return statearr_27966;
})();
if(inst_27898){
var statearr_27967_28012 = state_27963__$1;
(statearr_27967_28012[(1)] = (2));

} else {
var statearr_27968_28013 = state_27963__$1;
(statearr_27968_28013[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (24))){
var inst_27915 = (state_27963[(10)]);
var inst_27907 = inst_27915;
var state_27963__$1 = (function (){var statearr_27969 = state_27963;
(statearr_27969[(7)] = inst_27907);

return statearr_27969;
})();
var statearr_27970_28014 = state_27963__$1;
(statearr_27970_28014[(2)] = null);

(statearr_27970_28014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (4))){
var inst_27897 = (state_27963[(9)]);
var inst_27903 = (state_27963[(2)]);
var inst_27904 = cljs.core.get.call(null,inst_27903,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27905 = cljs.core.get.call(null,inst_27903,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27906 = cljs.core.get.call(null,inst_27903,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27907 = inst_27897;
var state_27963__$1 = (function (){var statearr_27971 = state_27963;
(statearr_27971[(11)] = inst_27905);

(statearr_27971[(7)] = inst_27907);

(statearr_27971[(12)] = inst_27906);

(statearr_27971[(13)] = inst_27904);

return statearr_27971;
})();
var statearr_27972_28015 = state_27963__$1;
(statearr_27972_28015[(2)] = null);

(statearr_27972_28015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (15))){
var state_27963__$1 = state_27963;
var statearr_27973_28016 = state_27963__$1;
(statearr_27973_28016[(2)] = null);

(statearr_27973_28016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (21))){
var inst_27915 = (state_27963[(10)]);
var inst_27907 = inst_27915;
var state_27963__$1 = (function (){var statearr_27974 = state_27963;
(statearr_27974[(7)] = inst_27907);

return statearr_27974;
})();
var statearr_27975_28017 = state_27963__$1;
(statearr_27975_28017[(2)] = null);

(statearr_27975_28017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (13))){
var inst_27959 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_27976_28018 = state_27963__$1;
(statearr_27976_28018[(2)] = inst_27959);

(statearr_27976_28018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (22))){
var inst_27957 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_27977_28019 = state_27963__$1;
(statearr_27977_28019[(2)] = inst_27957);

(statearr_27977_28019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (6))){
var inst_27961 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27963__$1,inst_27961);
} else {
if((state_val_27964 === (25))){
var state_27963__$1 = state_27963;
var statearr_27978_28020 = state_27963__$1;
(statearr_27978_28020[(2)] = null);

(statearr_27978_28020[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (17))){
var inst_27937 = (state_27963[(14)]);
var state_27963__$1 = state_27963;
var statearr_27979_28021 = state_27963__$1;
(statearr_27979_28021[(2)] = inst_27937);

(statearr_27979_28021[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (3))){
var inst_27897 = (state_27963[(9)]);
var state_27963__$1 = state_27963;
var statearr_27980_28022 = state_27963__$1;
(statearr_27980_28022[(2)] = inst_27897);

(statearr_27980_28022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (12))){
var inst_27923 = (state_27963[(15)]);
var inst_27937 = (state_27963[(14)]);
var inst_27916 = (state_27963[(16)]);
var inst_27937__$1 = inst_27916.call(null,inst_27923);
var state_27963__$1 = (function (){var statearr_27981 = state_27963;
(statearr_27981[(14)] = inst_27937__$1);

return statearr_27981;
})();
if(cljs.core.truth_(inst_27937__$1)){
var statearr_27982_28023 = state_27963__$1;
(statearr_27982_28023[(1)] = (17));

} else {
var statearr_27983_28024 = state_27963__$1;
(statearr_27983_28024[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (2))){
var inst_27897 = (state_27963[(9)]);
var inst_27900 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27897);
var state_27963__$1 = state_27963;
var statearr_27984_28025 = state_27963__$1;
(statearr_27984_28025[(2)] = inst_27900);

(statearr_27984_28025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (23))){
var inst_27948 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27948)){
var statearr_27985_28026 = state_27963__$1;
(statearr_27985_28026[(1)] = (24));

} else {
var statearr_27986_28027 = state_27963__$1;
(statearr_27986_28027[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (19))){
var inst_27945 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27945)){
var statearr_27987_28028 = state_27963__$1;
(statearr_27987_28028[(1)] = (20));

} else {
var statearr_27988_28029 = state_27963__$1;
(statearr_27988_28029[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (11))){
var inst_27922 = (state_27963[(8)]);
var inst_27928 = (inst_27922 == null);
var state_27963__$1 = state_27963;
if(cljs.core.truth_(inst_27928)){
var statearr_27989_28030 = state_27963__$1;
(statearr_27989_28030[(1)] = (14));

} else {
var statearr_27990_28031 = state_27963__$1;
(statearr_27990_28031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (9))){
var inst_27915 = (state_27963[(10)]);
var inst_27915__$1 = (state_27963[(2)]);
var inst_27916 = cljs.core.get.call(null,inst_27915__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27917 = cljs.core.get.call(null,inst_27915__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27918 = cljs.core.get.call(null,inst_27915__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27963__$1 = (function (){var statearr_27991 = state_27963;
(statearr_27991[(17)] = inst_27917);

(statearr_27991[(16)] = inst_27916);

(statearr_27991[(10)] = inst_27915__$1);

return statearr_27991;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27963__$1,(10),inst_27918);
} else {
if((state_val_27964 === (5))){
var inst_27907 = (state_27963[(7)]);
var inst_27910 = cljs.core.seq_QMARK_.call(null,inst_27907);
var state_27963__$1 = state_27963;
if(inst_27910){
var statearr_27992_28032 = state_27963__$1;
(statearr_27992_28032[(1)] = (7));

} else {
var statearr_27993_28033 = state_27963__$1;
(statearr_27993_28033[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (14))){
var inst_27923 = (state_27963[(15)]);
var inst_27930 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27923);
var state_27963__$1 = state_27963;
var statearr_27994_28034 = state_27963__$1;
(statearr_27994_28034[(2)] = inst_27930);

(statearr_27994_28034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (26))){
var inst_27953 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_27995_28035 = state_27963__$1;
(statearr_27995_28035[(2)] = inst_27953);

(statearr_27995_28035[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (16))){
var inst_27933 = (state_27963[(2)]);
var inst_27934 = calc_state.call(null);
var inst_27907 = inst_27934;
var state_27963__$1 = (function (){var statearr_27996 = state_27963;
(statearr_27996[(7)] = inst_27907);

(statearr_27996[(18)] = inst_27933);

return statearr_27996;
})();
var statearr_27997_28036 = state_27963__$1;
(statearr_27997_28036[(2)] = null);

(statearr_27997_28036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (10))){
var inst_27922 = (state_27963[(8)]);
var inst_27923 = (state_27963[(15)]);
var inst_27921 = (state_27963[(2)]);
var inst_27922__$1 = cljs.core.nth.call(null,inst_27921,(0),null);
var inst_27923__$1 = cljs.core.nth.call(null,inst_27921,(1),null);
var inst_27924 = (inst_27922__$1 == null);
var inst_27925 = cljs.core._EQ_.call(null,inst_27923__$1,change);
var inst_27926 = (inst_27924) || (inst_27925);
var state_27963__$1 = (function (){var statearr_27998 = state_27963;
(statearr_27998[(8)] = inst_27922__$1);

(statearr_27998[(15)] = inst_27923__$1);

return statearr_27998;
})();
if(cljs.core.truth_(inst_27926)){
var statearr_27999_28037 = state_27963__$1;
(statearr_27999_28037[(1)] = (11));

} else {
var statearr_28000_28038 = state_27963__$1;
(statearr_28000_28038[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (18))){
var inst_27917 = (state_27963[(17)]);
var inst_27923 = (state_27963[(15)]);
var inst_27916 = (state_27963[(16)]);
var inst_27940 = cljs.core.empty_QMARK_.call(null,inst_27916);
var inst_27941 = inst_27917.call(null,inst_27923);
var inst_27942 = cljs.core.not.call(null,inst_27941);
var inst_27943 = (inst_27940) && (inst_27942);
var state_27963__$1 = state_27963;
var statearr_28001_28039 = state_27963__$1;
(statearr_28001_28039[(2)] = inst_27943);

(statearr_28001_28039[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (8))){
var inst_27907 = (state_27963[(7)]);
var state_27963__$1 = state_27963;
var statearr_28002_28040 = state_27963__$1;
(statearr_28002_28040[(2)] = inst_27907);

(statearr_28002_28040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21033__auto__,c__21095__auto___28010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21034__auto__ = null;
var cljs$core$async$mix_$_state_machine__21034__auto____0 = (function (){
var statearr_28006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28006[(0)] = cljs$core$async$mix_$_state_machine__21034__auto__);

(statearr_28006[(1)] = (1));

return statearr_28006;
});
var cljs$core$async$mix_$_state_machine__21034__auto____1 = (function (state_27963){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_27963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28007){if((e28007 instanceof Object)){
var ex__21037__auto__ = e28007;
var statearr_28008_28041 = state_27963;
(statearr_28008_28041[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28042 = state_27963;
state_27963 = G__28042;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21034__auto__ = function(state_27963){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21034__auto____1.call(this,state_27963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21034__auto____0;
cljs$core$async$mix_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21034__auto____1;
return cljs$core$async$mix_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21097__auto__ = (function (){var statearr_28009 = f__21096__auto__.call(null);
(statearr_28009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28010);

return statearr_28009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28044 = {};
return obj28044;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18073__auto__ = p;
if(and__18073__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18073__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18721__auto__ = (((p == null))?null:p);
return (function (){var or__18085__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18073__auto__ = p;
if(and__18073__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18073__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18721__auto__ = (((p == null))?null:p);
return (function (){var or__18085__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28046 = arguments.length;
switch (G__28046) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18073__auto__ = p;
if(and__18073__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18073__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18721__auto__ = (((p == null))?null:p);
return (function (){var or__18085__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18073__auto__ = p;
if(and__18073__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18073__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18721__auto__ = (((p == null))?null:p);
return (function (){var or__18085__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18721__auto__)]);
if(or__18085__auto__){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18085__auto____$1){
return or__18085__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28050 = arguments.length;
switch (G__28050) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18085__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18085__auto__,mults){
return (function (p1__28048_SHARP_){
if(cljs.core.truth_(p1__28048_SHARP_.call(null,topic))){
return p1__28048_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28048_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18085__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28051 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28051 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28052){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28052 = meta28052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28053,meta28052__$1){
var self__ = this;
var _28053__$1 = this;
return (new cljs.core.async.t28051(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28052__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28053){
var self__ = this;
var _28053__$1 = this;
return self__.meta28052;
});})(mults,ensure_mult))
;

cljs.core.async.t28051.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28051.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28051.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28051.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28051.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28051.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28051.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28052","meta28052",1490916086,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t28051.cljs$lang$type = true;

cljs.core.async.t28051.cljs$lang$ctorStr = "cljs.core.async/t28051";

cljs.core.async.t28051.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t28051");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28051 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28051(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28052){
return (new cljs.core.async.t28051(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28052));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28051(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21095__auto___28174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28174,mults,ensure_mult,p){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28174,mults,ensure_mult,p){
return (function (state_28125){
var state_val_28126 = (state_28125[(1)]);
if((state_val_28126 === (7))){
var inst_28121 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28127_28175 = state_28125__$1;
(statearr_28127_28175[(2)] = inst_28121);

(statearr_28127_28175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (20))){
var state_28125__$1 = state_28125;
var statearr_28128_28176 = state_28125__$1;
(statearr_28128_28176[(2)] = null);

(statearr_28128_28176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (1))){
var state_28125__$1 = state_28125;
var statearr_28129_28177 = state_28125__$1;
(statearr_28129_28177[(2)] = null);

(statearr_28129_28177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (24))){
var inst_28104 = (state_28125[(7)]);
var inst_28113 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28104);
var state_28125__$1 = state_28125;
var statearr_28130_28178 = state_28125__$1;
(statearr_28130_28178[(2)] = inst_28113);

(statearr_28130_28178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (4))){
var inst_28056 = (state_28125[(8)]);
var inst_28056__$1 = (state_28125[(2)]);
var inst_28057 = (inst_28056__$1 == null);
var state_28125__$1 = (function (){var statearr_28131 = state_28125;
(statearr_28131[(8)] = inst_28056__$1);

return statearr_28131;
})();
if(cljs.core.truth_(inst_28057)){
var statearr_28132_28179 = state_28125__$1;
(statearr_28132_28179[(1)] = (5));

} else {
var statearr_28133_28180 = state_28125__$1;
(statearr_28133_28180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (15))){
var inst_28098 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28134_28181 = state_28125__$1;
(statearr_28134_28181[(2)] = inst_28098);

(statearr_28134_28181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (21))){
var inst_28118 = (state_28125[(2)]);
var state_28125__$1 = (function (){var statearr_28135 = state_28125;
(statearr_28135[(9)] = inst_28118);

return statearr_28135;
})();
var statearr_28136_28182 = state_28125__$1;
(statearr_28136_28182[(2)] = null);

(statearr_28136_28182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (13))){
var inst_28080 = (state_28125[(10)]);
var inst_28082 = cljs.core.chunked_seq_QMARK_.call(null,inst_28080);
var state_28125__$1 = state_28125;
if(inst_28082){
var statearr_28137_28183 = state_28125__$1;
(statearr_28137_28183[(1)] = (16));

} else {
var statearr_28138_28184 = state_28125__$1;
(statearr_28138_28184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (22))){
var inst_28110 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
if(cljs.core.truth_(inst_28110)){
var statearr_28139_28185 = state_28125__$1;
(statearr_28139_28185[(1)] = (23));

} else {
var statearr_28140_28186 = state_28125__$1;
(statearr_28140_28186[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (6))){
var inst_28104 = (state_28125[(7)]);
var inst_28056 = (state_28125[(8)]);
var inst_28106 = (state_28125[(11)]);
var inst_28104__$1 = topic_fn.call(null,inst_28056);
var inst_28105 = cljs.core.deref.call(null,mults);
var inst_28106__$1 = cljs.core.get.call(null,inst_28105,inst_28104__$1);
var state_28125__$1 = (function (){var statearr_28141 = state_28125;
(statearr_28141[(7)] = inst_28104__$1);

(statearr_28141[(11)] = inst_28106__$1);

return statearr_28141;
})();
if(cljs.core.truth_(inst_28106__$1)){
var statearr_28142_28187 = state_28125__$1;
(statearr_28142_28187[(1)] = (19));

} else {
var statearr_28143_28188 = state_28125__$1;
(statearr_28143_28188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (25))){
var inst_28115 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28144_28189 = state_28125__$1;
(statearr_28144_28189[(2)] = inst_28115);

(statearr_28144_28189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (17))){
var inst_28080 = (state_28125[(10)]);
var inst_28089 = cljs.core.first.call(null,inst_28080);
var inst_28090 = cljs.core.async.muxch_STAR_.call(null,inst_28089);
var inst_28091 = cljs.core.async.close_BANG_.call(null,inst_28090);
var inst_28092 = cljs.core.next.call(null,inst_28080);
var inst_28066 = inst_28092;
var inst_28067 = null;
var inst_28068 = (0);
var inst_28069 = (0);
var state_28125__$1 = (function (){var statearr_28145 = state_28125;
(statearr_28145[(12)] = inst_28069);

(statearr_28145[(13)] = inst_28066);

(statearr_28145[(14)] = inst_28068);

(statearr_28145[(15)] = inst_28067);

(statearr_28145[(16)] = inst_28091);

return statearr_28145;
})();
var statearr_28146_28190 = state_28125__$1;
(statearr_28146_28190[(2)] = null);

(statearr_28146_28190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (3))){
var inst_28123 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28125__$1,inst_28123);
} else {
if((state_val_28126 === (12))){
var inst_28100 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28147_28191 = state_28125__$1;
(statearr_28147_28191[(2)] = inst_28100);

(statearr_28147_28191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (2))){
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28125__$1,(4),ch);
} else {
if((state_val_28126 === (23))){
var state_28125__$1 = state_28125;
var statearr_28148_28192 = state_28125__$1;
(statearr_28148_28192[(2)] = null);

(statearr_28148_28192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (19))){
var inst_28056 = (state_28125[(8)]);
var inst_28106 = (state_28125[(11)]);
var inst_28108 = cljs.core.async.muxch_STAR_.call(null,inst_28106);
var state_28125__$1 = state_28125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28125__$1,(22),inst_28108,inst_28056);
} else {
if((state_val_28126 === (11))){
var inst_28080 = (state_28125[(10)]);
var inst_28066 = (state_28125[(13)]);
var inst_28080__$1 = cljs.core.seq.call(null,inst_28066);
var state_28125__$1 = (function (){var statearr_28149 = state_28125;
(statearr_28149[(10)] = inst_28080__$1);

return statearr_28149;
})();
if(inst_28080__$1){
var statearr_28150_28193 = state_28125__$1;
(statearr_28150_28193[(1)] = (13));

} else {
var statearr_28151_28194 = state_28125__$1;
(statearr_28151_28194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (9))){
var inst_28102 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28152_28195 = state_28125__$1;
(statearr_28152_28195[(2)] = inst_28102);

(statearr_28152_28195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (5))){
var inst_28063 = cljs.core.deref.call(null,mults);
var inst_28064 = cljs.core.vals.call(null,inst_28063);
var inst_28065 = cljs.core.seq.call(null,inst_28064);
var inst_28066 = inst_28065;
var inst_28067 = null;
var inst_28068 = (0);
var inst_28069 = (0);
var state_28125__$1 = (function (){var statearr_28153 = state_28125;
(statearr_28153[(12)] = inst_28069);

(statearr_28153[(13)] = inst_28066);

(statearr_28153[(14)] = inst_28068);

(statearr_28153[(15)] = inst_28067);

return statearr_28153;
})();
var statearr_28154_28196 = state_28125__$1;
(statearr_28154_28196[(2)] = null);

(statearr_28154_28196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (14))){
var state_28125__$1 = state_28125;
var statearr_28158_28197 = state_28125__$1;
(statearr_28158_28197[(2)] = null);

(statearr_28158_28197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (16))){
var inst_28080 = (state_28125[(10)]);
var inst_28084 = cljs.core.chunk_first.call(null,inst_28080);
var inst_28085 = cljs.core.chunk_rest.call(null,inst_28080);
var inst_28086 = cljs.core.count.call(null,inst_28084);
var inst_28066 = inst_28085;
var inst_28067 = inst_28084;
var inst_28068 = inst_28086;
var inst_28069 = (0);
var state_28125__$1 = (function (){var statearr_28159 = state_28125;
(statearr_28159[(12)] = inst_28069);

(statearr_28159[(13)] = inst_28066);

(statearr_28159[(14)] = inst_28068);

(statearr_28159[(15)] = inst_28067);

return statearr_28159;
})();
var statearr_28160_28198 = state_28125__$1;
(statearr_28160_28198[(2)] = null);

(statearr_28160_28198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (10))){
var inst_28069 = (state_28125[(12)]);
var inst_28066 = (state_28125[(13)]);
var inst_28068 = (state_28125[(14)]);
var inst_28067 = (state_28125[(15)]);
var inst_28074 = cljs.core._nth.call(null,inst_28067,inst_28069);
var inst_28075 = cljs.core.async.muxch_STAR_.call(null,inst_28074);
var inst_28076 = cljs.core.async.close_BANG_.call(null,inst_28075);
var inst_28077 = (inst_28069 + (1));
var tmp28155 = inst_28066;
var tmp28156 = inst_28068;
var tmp28157 = inst_28067;
var inst_28066__$1 = tmp28155;
var inst_28067__$1 = tmp28157;
var inst_28068__$1 = tmp28156;
var inst_28069__$1 = inst_28077;
var state_28125__$1 = (function (){var statearr_28161 = state_28125;
(statearr_28161[(17)] = inst_28076);

(statearr_28161[(12)] = inst_28069__$1);

(statearr_28161[(13)] = inst_28066__$1);

(statearr_28161[(14)] = inst_28068__$1);

(statearr_28161[(15)] = inst_28067__$1);

return statearr_28161;
})();
var statearr_28162_28199 = state_28125__$1;
(statearr_28162_28199[(2)] = null);

(statearr_28162_28199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (18))){
var inst_28095 = (state_28125[(2)]);
var state_28125__$1 = state_28125;
var statearr_28163_28200 = state_28125__$1;
(statearr_28163_28200[(2)] = inst_28095);

(statearr_28163_28200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28126 === (8))){
var inst_28069 = (state_28125[(12)]);
var inst_28068 = (state_28125[(14)]);
var inst_28071 = (inst_28069 < inst_28068);
var inst_28072 = inst_28071;
var state_28125__$1 = state_28125;
if(cljs.core.truth_(inst_28072)){
var statearr_28164_28201 = state_28125__$1;
(statearr_28164_28201[(1)] = (10));

} else {
var statearr_28165_28202 = state_28125__$1;
(statearr_28165_28202[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28174,mults,ensure_mult,p))
;
return ((function (switch__21033__auto__,c__21095__auto___28174,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_28169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28169[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_28169[(1)] = (1));

return statearr_28169;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_28125){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28170){if((e28170 instanceof Object)){
var ex__21037__auto__ = e28170;
var statearr_28171_28203 = state_28125;
(statearr_28171_28203[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28204 = state_28125;
state_28125 = G__28204;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_28125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_28125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28174,mults,ensure_mult,p))
})();
var state__21097__auto__ = (function (){var statearr_28172 = f__21096__auto__.call(null);
(statearr_28172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28174);

return statearr_28172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28174,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28206 = arguments.length;
switch (G__28206) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28209 = arguments.length;
switch (G__28209) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28212 = arguments.length;
switch (G__28212) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21095__auto___28282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28251){
var state_val_28252 = (state_28251[(1)]);
if((state_val_28252 === (7))){
var state_28251__$1 = state_28251;
var statearr_28253_28283 = state_28251__$1;
(statearr_28253_28283[(2)] = null);

(statearr_28253_28283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (1))){
var state_28251__$1 = state_28251;
var statearr_28254_28284 = state_28251__$1;
(statearr_28254_28284[(2)] = null);

(statearr_28254_28284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (4))){
var inst_28215 = (state_28251[(7)]);
var inst_28217 = (inst_28215 < cnt);
var state_28251__$1 = state_28251;
if(cljs.core.truth_(inst_28217)){
var statearr_28255_28285 = state_28251__$1;
(statearr_28255_28285[(1)] = (6));

} else {
var statearr_28256_28286 = state_28251__$1;
(statearr_28256_28286[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (15))){
var inst_28247 = (state_28251[(2)]);
var state_28251__$1 = state_28251;
var statearr_28257_28287 = state_28251__$1;
(statearr_28257_28287[(2)] = inst_28247);

(statearr_28257_28287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (13))){
var inst_28240 = cljs.core.async.close_BANG_.call(null,out);
var state_28251__$1 = state_28251;
var statearr_28258_28288 = state_28251__$1;
(statearr_28258_28288[(2)] = inst_28240);

(statearr_28258_28288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (6))){
var state_28251__$1 = state_28251;
var statearr_28259_28289 = state_28251__$1;
(statearr_28259_28289[(2)] = null);

(statearr_28259_28289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (3))){
var inst_28249 = (state_28251[(2)]);
var state_28251__$1 = state_28251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28251__$1,inst_28249);
} else {
if((state_val_28252 === (12))){
var inst_28237 = (state_28251[(8)]);
var inst_28237__$1 = (state_28251[(2)]);
var inst_28238 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28237__$1);
var state_28251__$1 = (function (){var statearr_28260 = state_28251;
(statearr_28260[(8)] = inst_28237__$1);

return statearr_28260;
})();
if(cljs.core.truth_(inst_28238)){
var statearr_28261_28290 = state_28251__$1;
(statearr_28261_28290[(1)] = (13));

} else {
var statearr_28262_28291 = state_28251__$1;
(statearr_28262_28291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (2))){
var inst_28214 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28215 = (0);
var state_28251__$1 = (function (){var statearr_28263 = state_28251;
(statearr_28263[(9)] = inst_28214);

(statearr_28263[(7)] = inst_28215);

return statearr_28263;
})();
var statearr_28264_28292 = state_28251__$1;
(statearr_28264_28292[(2)] = null);

(statearr_28264_28292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (11))){
var inst_28215 = (state_28251[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28251,(10),Object,null,(9));
var inst_28224 = chs__$1.call(null,inst_28215);
var inst_28225 = done.call(null,inst_28215);
var inst_28226 = cljs.core.async.take_BANG_.call(null,inst_28224,inst_28225);
var state_28251__$1 = state_28251;
var statearr_28265_28293 = state_28251__$1;
(statearr_28265_28293[(2)] = inst_28226);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28251__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (9))){
var inst_28215 = (state_28251[(7)]);
var inst_28228 = (state_28251[(2)]);
var inst_28229 = (inst_28215 + (1));
var inst_28215__$1 = inst_28229;
var state_28251__$1 = (function (){var statearr_28266 = state_28251;
(statearr_28266[(10)] = inst_28228);

(statearr_28266[(7)] = inst_28215__$1);

return statearr_28266;
})();
var statearr_28267_28294 = state_28251__$1;
(statearr_28267_28294[(2)] = null);

(statearr_28267_28294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (5))){
var inst_28235 = (state_28251[(2)]);
var state_28251__$1 = (function (){var statearr_28268 = state_28251;
(statearr_28268[(11)] = inst_28235);

return statearr_28268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28251__$1,(12),dchan);
} else {
if((state_val_28252 === (14))){
var inst_28237 = (state_28251[(8)]);
var inst_28242 = cljs.core.apply.call(null,f,inst_28237);
var state_28251__$1 = state_28251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28251__$1,(16),out,inst_28242);
} else {
if((state_val_28252 === (16))){
var inst_28244 = (state_28251[(2)]);
var state_28251__$1 = (function (){var statearr_28269 = state_28251;
(statearr_28269[(12)] = inst_28244);

return statearr_28269;
})();
var statearr_28270_28295 = state_28251__$1;
(statearr_28270_28295[(2)] = null);

(statearr_28270_28295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (10))){
var inst_28219 = (state_28251[(2)]);
var inst_28220 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28251__$1 = (function (){var statearr_28271 = state_28251;
(statearr_28271[(13)] = inst_28219);

return statearr_28271;
})();
var statearr_28272_28296 = state_28251__$1;
(statearr_28272_28296[(2)] = inst_28220);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28251__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28252 === (8))){
var inst_28233 = (state_28251[(2)]);
var state_28251__$1 = state_28251;
var statearr_28273_28297 = state_28251__$1;
(statearr_28273_28297[(2)] = inst_28233);

(statearr_28273_28297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28282,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21033__auto__,c__21095__auto___28282,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_28277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28277[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_28277[(1)] = (1));

return statearr_28277;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_28251){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28278){if((e28278 instanceof Object)){
var ex__21037__auto__ = e28278;
var statearr_28279_28298 = state_28251;
(statearr_28279_28298[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28299 = state_28251;
state_28251 = G__28299;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_28251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_28251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28282,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21097__auto__ = (function (){var statearr_28280 = f__21096__auto__.call(null);
(statearr_28280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28282);

return statearr_28280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28282,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28302 = arguments.length;
switch (G__28302) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21095__auto___28357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28357,out){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28357,out){
return (function (state_28332){
var state_val_28333 = (state_28332[(1)]);
if((state_val_28333 === (7))){
var inst_28312 = (state_28332[(7)]);
var inst_28311 = (state_28332[(8)]);
var inst_28311__$1 = (state_28332[(2)]);
var inst_28312__$1 = cljs.core.nth.call(null,inst_28311__$1,(0),null);
var inst_28313 = cljs.core.nth.call(null,inst_28311__$1,(1),null);
var inst_28314 = (inst_28312__$1 == null);
var state_28332__$1 = (function (){var statearr_28334 = state_28332;
(statearr_28334[(7)] = inst_28312__$1);

(statearr_28334[(8)] = inst_28311__$1);

(statearr_28334[(9)] = inst_28313);

return statearr_28334;
})();
if(cljs.core.truth_(inst_28314)){
var statearr_28335_28358 = state_28332__$1;
(statearr_28335_28358[(1)] = (8));

} else {
var statearr_28336_28359 = state_28332__$1;
(statearr_28336_28359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (1))){
var inst_28303 = cljs.core.vec.call(null,chs);
var inst_28304 = inst_28303;
var state_28332__$1 = (function (){var statearr_28337 = state_28332;
(statearr_28337[(10)] = inst_28304);

return statearr_28337;
})();
var statearr_28338_28360 = state_28332__$1;
(statearr_28338_28360[(2)] = null);

(statearr_28338_28360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (4))){
var inst_28304 = (state_28332[(10)]);
var state_28332__$1 = state_28332;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28332__$1,(7),inst_28304);
} else {
if((state_val_28333 === (6))){
var inst_28328 = (state_28332[(2)]);
var state_28332__$1 = state_28332;
var statearr_28339_28361 = state_28332__$1;
(statearr_28339_28361[(2)] = inst_28328);

(statearr_28339_28361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (3))){
var inst_28330 = (state_28332[(2)]);
var state_28332__$1 = state_28332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28332__$1,inst_28330);
} else {
if((state_val_28333 === (2))){
var inst_28304 = (state_28332[(10)]);
var inst_28306 = cljs.core.count.call(null,inst_28304);
var inst_28307 = (inst_28306 > (0));
var state_28332__$1 = state_28332;
if(cljs.core.truth_(inst_28307)){
var statearr_28341_28362 = state_28332__$1;
(statearr_28341_28362[(1)] = (4));

} else {
var statearr_28342_28363 = state_28332__$1;
(statearr_28342_28363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (11))){
var inst_28304 = (state_28332[(10)]);
var inst_28321 = (state_28332[(2)]);
var tmp28340 = inst_28304;
var inst_28304__$1 = tmp28340;
var state_28332__$1 = (function (){var statearr_28343 = state_28332;
(statearr_28343[(11)] = inst_28321);

(statearr_28343[(10)] = inst_28304__$1);

return statearr_28343;
})();
var statearr_28344_28364 = state_28332__$1;
(statearr_28344_28364[(2)] = null);

(statearr_28344_28364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (9))){
var inst_28312 = (state_28332[(7)]);
var state_28332__$1 = state_28332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28332__$1,(11),out,inst_28312);
} else {
if((state_val_28333 === (5))){
var inst_28326 = cljs.core.async.close_BANG_.call(null,out);
var state_28332__$1 = state_28332;
var statearr_28345_28365 = state_28332__$1;
(statearr_28345_28365[(2)] = inst_28326);

(statearr_28345_28365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (10))){
var inst_28324 = (state_28332[(2)]);
var state_28332__$1 = state_28332;
var statearr_28346_28366 = state_28332__$1;
(statearr_28346_28366[(2)] = inst_28324);

(statearr_28346_28366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28333 === (8))){
var inst_28312 = (state_28332[(7)]);
var inst_28304 = (state_28332[(10)]);
var inst_28311 = (state_28332[(8)]);
var inst_28313 = (state_28332[(9)]);
var inst_28316 = (function (){var cs = inst_28304;
var vec__28309 = inst_28311;
var v = inst_28312;
var c = inst_28313;
return ((function (cs,vec__28309,v,c,inst_28312,inst_28304,inst_28311,inst_28313,state_val_28333,c__21095__auto___28357,out){
return (function (p1__28300_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28300_SHARP_);
});
;})(cs,vec__28309,v,c,inst_28312,inst_28304,inst_28311,inst_28313,state_val_28333,c__21095__auto___28357,out))
})();
var inst_28317 = cljs.core.filterv.call(null,inst_28316,inst_28304);
var inst_28304__$1 = inst_28317;
var state_28332__$1 = (function (){var statearr_28347 = state_28332;
(statearr_28347[(10)] = inst_28304__$1);

return statearr_28347;
})();
var statearr_28348_28367 = state_28332__$1;
(statearr_28348_28367[(2)] = null);

(statearr_28348_28367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28357,out))
;
return ((function (switch__21033__auto__,c__21095__auto___28357,out){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_28352 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28352[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_28352[(1)] = (1));

return statearr_28352;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_28332){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28353){if((e28353 instanceof Object)){
var ex__21037__auto__ = e28353;
var statearr_28354_28368 = state_28332;
(statearr_28354_28368[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28369 = state_28332;
state_28332 = G__28369;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_28332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_28332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28357,out))
})();
var state__21097__auto__ = (function (){var statearr_28355 = f__21096__auto__.call(null);
(statearr_28355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28357);

return statearr_28355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28357,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28371 = arguments.length;
switch (G__28371) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21095__auto___28419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28419,out){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28419,out){
return (function (state_28395){
var state_val_28396 = (state_28395[(1)]);
if((state_val_28396 === (7))){
var inst_28377 = (state_28395[(7)]);
var inst_28377__$1 = (state_28395[(2)]);
var inst_28378 = (inst_28377__$1 == null);
var inst_28379 = cljs.core.not.call(null,inst_28378);
var state_28395__$1 = (function (){var statearr_28397 = state_28395;
(statearr_28397[(7)] = inst_28377__$1);

return statearr_28397;
})();
if(inst_28379){
var statearr_28398_28420 = state_28395__$1;
(statearr_28398_28420[(1)] = (8));

} else {
var statearr_28399_28421 = state_28395__$1;
(statearr_28399_28421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28396 === (1))){
var inst_28372 = (0);
var state_28395__$1 = (function (){var statearr_28400 = state_28395;
(statearr_28400[(8)] = inst_28372);

return statearr_28400;
})();
var statearr_28401_28422 = state_28395__$1;
(statearr_28401_28422[(2)] = null);

(statearr_28401_28422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28396 === (4))){
var state_28395__$1 = state_28395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28395__$1,(7),ch);
} else {
if((state_val_28396 === (6))){
var inst_28390 = (state_28395[(2)]);
var state_28395__$1 = state_28395;
var statearr_28402_28423 = state_28395__$1;
(statearr_28402_28423[(2)] = inst_28390);

(statearr_28402_28423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28396 === (3))){
var inst_28392 = (state_28395[(2)]);
var inst_28393 = cljs.core.async.close_BANG_.call(null,out);
var state_28395__$1 = (function (){var statearr_28403 = state_28395;
(statearr_28403[(9)] = inst_28392);

return statearr_28403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28395__$1,inst_28393);
} else {
if((state_val_28396 === (2))){
var inst_28372 = (state_28395[(8)]);
var inst_28374 = (inst_28372 < n);
var state_28395__$1 = state_28395;
if(cljs.core.truth_(inst_28374)){
var statearr_28404_28424 = state_28395__$1;
(statearr_28404_28424[(1)] = (4));

} else {
var statearr_28405_28425 = state_28395__$1;
(statearr_28405_28425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28396 === (11))){
var inst_28372 = (state_28395[(8)]);
var inst_28382 = (state_28395[(2)]);
var inst_28383 = (inst_28372 + (1));
var inst_28372__$1 = inst_28383;
var state_28395__$1 = (function (){var statearr_28406 = state_28395;
(statearr_28406[(8)] = inst_28372__$1);

(statearr_28406[(10)] = inst_28382);

return statearr_28406;
})();
var statearr_28407_28426 = state_28395__$1;
(statearr_28407_28426[(2)] = null);

(statearr_28407_28426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28396 === (9))){
var state_28395__$1 = state_28395;
var statearr_28408_28427 = state_28395__$1;
(statearr_28408_28427[(2)] = null);

(statearr_28408_28427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28396 === (5))){
var state_28395__$1 = state_28395;
var statearr_28409_28428 = state_28395__$1;
(statearr_28409_28428[(2)] = null);

(statearr_28409_28428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28396 === (10))){
var inst_28387 = (state_28395[(2)]);
var state_28395__$1 = state_28395;
var statearr_28410_28429 = state_28395__$1;
(statearr_28410_28429[(2)] = inst_28387);

(statearr_28410_28429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28396 === (8))){
var inst_28377 = (state_28395[(7)]);
var state_28395__$1 = state_28395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28395__$1,(11),out,inst_28377);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28419,out))
;
return ((function (switch__21033__auto__,c__21095__auto___28419,out){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_28414 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28414[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_28414[(1)] = (1));

return statearr_28414;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_28395){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28415){if((e28415 instanceof Object)){
var ex__21037__auto__ = e28415;
var statearr_28416_28430 = state_28395;
(statearr_28416_28430[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28431 = state_28395;
state_28395 = G__28431;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_28395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_28395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28419,out))
})();
var state__21097__auto__ = (function (){var statearr_28417 = f__21096__auto__.call(null);
(statearr_28417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28419);

return statearr_28417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28419,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28439 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28439 = (function (map_LT_,f,ch,meta28440){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28440 = meta28440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28441,meta28440__$1){
var self__ = this;
var _28441__$1 = this;
return (new cljs.core.async.t28439(self__.map_LT_,self__.f,self__.ch,meta28440__$1));
});

cljs.core.async.t28439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28441){
var self__ = this;
var _28441__$1 = this;
return self__.meta28440;
});

cljs.core.async.t28439.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28439.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28439.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28442 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28442 = (function (map_LT_,f,ch,meta28440,_,fn1,meta28443){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28440 = meta28440;
this._ = _;
this.fn1 = fn1;
this.meta28443 = meta28443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28444,meta28443__$1){
var self__ = this;
var _28444__$1 = this;
return (new cljs.core.async.t28442(self__.map_LT_,self__.f,self__.ch,self__.meta28440,self__._,self__.fn1,meta28443__$1));
});})(___$1))
;

cljs.core.async.t28442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28444){
var self__ = this;
var _28444__$1 = this;
return self__.meta28443;
});})(___$1))
;

cljs.core.async.t28442.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28432_SHARP_){
return f1.call(null,(((p1__28432_SHARP_ == null))?null:self__.f.call(null,p1__28432_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28442.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28440","meta28440",-2065156271,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28443","meta28443",96041593,null)], null);
});})(___$1))
;

cljs.core.async.t28442.cljs$lang$type = true;

cljs.core.async.t28442.cljs$lang$ctorStr = "cljs.core.async/t28442";

cljs.core.async.t28442.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t28442");
});})(___$1))
;

cljs.core.async.__GT_t28442 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28442(map_LT___$1,f__$1,ch__$1,meta28440__$1,___$2,fn1__$1,meta28443){
return (new cljs.core.async.t28442(map_LT___$1,f__$1,ch__$1,meta28440__$1,___$2,fn1__$1,meta28443));
});})(___$1))
;

}

return (new cljs.core.async.t28442(self__.map_LT_,self__.f,self__.ch,self__.meta28440,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18073__auto__ = ret;
if(cljs.core.truth_(and__18073__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18073__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28439.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28440","meta28440",-2065156271,null)], null);
});

cljs.core.async.t28439.cljs$lang$type = true;

cljs.core.async.t28439.cljs$lang$ctorStr = "cljs.core.async/t28439";

cljs.core.async.t28439.cljs$lang$ctorPrWriter = (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t28439");
});

cljs.core.async.__GT_t28439 = (function cljs$core$async$map_LT__$___GT_t28439(map_LT___$1,f__$1,ch__$1,meta28440){
return (new cljs.core.async.t28439(map_LT___$1,f__$1,ch__$1,meta28440));
});

}

return (new cljs.core.async.t28439(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28448 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28448 = (function (map_GT_,f,ch,meta28449){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28449 = meta28449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28450,meta28449__$1){
var self__ = this;
var _28450__$1 = this;
return (new cljs.core.async.t28448(self__.map_GT_,self__.f,self__.ch,meta28449__$1));
});

cljs.core.async.t28448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28450){
var self__ = this;
var _28450__$1 = this;
return self__.meta28449;
});

cljs.core.async.t28448.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28448.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28448.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28449","meta28449",-2031320991,null)], null);
});

cljs.core.async.t28448.cljs$lang$type = true;

cljs.core.async.t28448.cljs$lang$ctorStr = "cljs.core.async/t28448";

cljs.core.async.t28448.cljs$lang$ctorPrWriter = (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t28448");
});

cljs.core.async.__GT_t28448 = (function cljs$core$async$map_GT__$___GT_t28448(map_GT___$1,f__$1,ch__$1,meta28449){
return (new cljs.core.async.t28448(map_GT___$1,f__$1,ch__$1,meta28449));
});

}

return (new cljs.core.async.t28448(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28454 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28454 = (function (filter_GT_,p,ch,meta28455){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28455 = meta28455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28456,meta28455__$1){
var self__ = this;
var _28456__$1 = this;
return (new cljs.core.async.t28454(self__.filter_GT_,self__.p,self__.ch,meta28455__$1));
});

cljs.core.async.t28454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28456){
var self__ = this;
var _28456__$1 = this;
return self__.meta28455;
});

cljs.core.async.t28454.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28454.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28454.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28454.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28455","meta28455",-709389197,null)], null);
});

cljs.core.async.t28454.cljs$lang$type = true;

cljs.core.async.t28454.cljs$lang$ctorStr = "cljs.core.async/t28454";

cljs.core.async.t28454.cljs$lang$ctorPrWriter = (function (this__18664__auto__,writer__18665__auto__,opt__18666__auto__){
return cljs.core._write.call(null,writer__18665__auto__,"cljs.core.async/t28454");
});

cljs.core.async.__GT_t28454 = (function cljs$core$async$filter_GT__$___GT_t28454(filter_GT___$1,p__$1,ch__$1,meta28455){
return (new cljs.core.async.t28454(filter_GT___$1,p__$1,ch__$1,meta28455));
});

}

return (new cljs.core.async.t28454(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28458 = arguments.length;
switch (G__28458) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21095__auto___28501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28501,out){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28501,out){
return (function (state_28479){
var state_val_28480 = (state_28479[(1)]);
if((state_val_28480 === (7))){
var inst_28475 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28481_28502 = state_28479__$1;
(statearr_28481_28502[(2)] = inst_28475);

(statearr_28481_28502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (1))){
var state_28479__$1 = state_28479;
var statearr_28482_28503 = state_28479__$1;
(statearr_28482_28503[(2)] = null);

(statearr_28482_28503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (4))){
var inst_28461 = (state_28479[(7)]);
var inst_28461__$1 = (state_28479[(2)]);
var inst_28462 = (inst_28461__$1 == null);
var state_28479__$1 = (function (){var statearr_28483 = state_28479;
(statearr_28483[(7)] = inst_28461__$1);

return statearr_28483;
})();
if(cljs.core.truth_(inst_28462)){
var statearr_28484_28504 = state_28479__$1;
(statearr_28484_28504[(1)] = (5));

} else {
var statearr_28485_28505 = state_28479__$1;
(statearr_28485_28505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (6))){
var inst_28461 = (state_28479[(7)]);
var inst_28466 = p.call(null,inst_28461);
var state_28479__$1 = state_28479;
if(cljs.core.truth_(inst_28466)){
var statearr_28486_28506 = state_28479__$1;
(statearr_28486_28506[(1)] = (8));

} else {
var statearr_28487_28507 = state_28479__$1;
(statearr_28487_28507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (3))){
var inst_28477 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28479__$1,inst_28477);
} else {
if((state_val_28480 === (2))){
var state_28479__$1 = state_28479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28479__$1,(4),ch);
} else {
if((state_val_28480 === (11))){
var inst_28469 = (state_28479[(2)]);
var state_28479__$1 = state_28479;
var statearr_28488_28508 = state_28479__$1;
(statearr_28488_28508[(2)] = inst_28469);

(statearr_28488_28508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (9))){
var state_28479__$1 = state_28479;
var statearr_28489_28509 = state_28479__$1;
(statearr_28489_28509[(2)] = null);

(statearr_28489_28509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (5))){
var inst_28464 = cljs.core.async.close_BANG_.call(null,out);
var state_28479__$1 = state_28479;
var statearr_28490_28510 = state_28479__$1;
(statearr_28490_28510[(2)] = inst_28464);

(statearr_28490_28510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (10))){
var inst_28472 = (state_28479[(2)]);
var state_28479__$1 = (function (){var statearr_28491 = state_28479;
(statearr_28491[(8)] = inst_28472);

return statearr_28491;
})();
var statearr_28492_28511 = state_28479__$1;
(statearr_28492_28511[(2)] = null);

(statearr_28492_28511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28480 === (8))){
var inst_28461 = (state_28479[(7)]);
var state_28479__$1 = state_28479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28479__$1,(11),out,inst_28461);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28501,out))
;
return ((function (switch__21033__auto__,c__21095__auto___28501,out){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_28496 = [null,null,null,null,null,null,null,null,null];
(statearr_28496[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_28496[(1)] = (1));

return statearr_28496;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_28479){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28497){if((e28497 instanceof Object)){
var ex__21037__auto__ = e28497;
var statearr_28498_28512 = state_28479;
(statearr_28498_28512[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28513 = state_28479;
state_28479 = G__28513;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_28479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_28479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28501,out))
})();
var state__21097__auto__ = (function (){var statearr_28499 = f__21096__auto__.call(null);
(statearr_28499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28501);

return statearr_28499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28501,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28515 = arguments.length;
switch (G__28515) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto__){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto__){
return (function (state_28682){
var state_val_28683 = (state_28682[(1)]);
if((state_val_28683 === (7))){
var inst_28678 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28684_28725 = state_28682__$1;
(statearr_28684_28725[(2)] = inst_28678);

(statearr_28684_28725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (20))){
var inst_28648 = (state_28682[(7)]);
var inst_28659 = (state_28682[(2)]);
var inst_28660 = cljs.core.next.call(null,inst_28648);
var inst_28634 = inst_28660;
var inst_28635 = null;
var inst_28636 = (0);
var inst_28637 = (0);
var state_28682__$1 = (function (){var statearr_28685 = state_28682;
(statearr_28685[(8)] = inst_28659);

(statearr_28685[(9)] = inst_28636);

(statearr_28685[(10)] = inst_28635);

(statearr_28685[(11)] = inst_28637);

(statearr_28685[(12)] = inst_28634);

return statearr_28685;
})();
var statearr_28686_28726 = state_28682__$1;
(statearr_28686_28726[(2)] = null);

(statearr_28686_28726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (1))){
var state_28682__$1 = state_28682;
var statearr_28687_28727 = state_28682__$1;
(statearr_28687_28727[(2)] = null);

(statearr_28687_28727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (4))){
var inst_28623 = (state_28682[(13)]);
var inst_28623__$1 = (state_28682[(2)]);
var inst_28624 = (inst_28623__$1 == null);
var state_28682__$1 = (function (){var statearr_28688 = state_28682;
(statearr_28688[(13)] = inst_28623__$1);

return statearr_28688;
})();
if(cljs.core.truth_(inst_28624)){
var statearr_28689_28728 = state_28682__$1;
(statearr_28689_28728[(1)] = (5));

} else {
var statearr_28690_28729 = state_28682__$1;
(statearr_28690_28729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (15))){
var state_28682__$1 = state_28682;
var statearr_28694_28730 = state_28682__$1;
(statearr_28694_28730[(2)] = null);

(statearr_28694_28730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (21))){
var state_28682__$1 = state_28682;
var statearr_28695_28731 = state_28682__$1;
(statearr_28695_28731[(2)] = null);

(statearr_28695_28731[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (13))){
var inst_28636 = (state_28682[(9)]);
var inst_28635 = (state_28682[(10)]);
var inst_28637 = (state_28682[(11)]);
var inst_28634 = (state_28682[(12)]);
var inst_28644 = (state_28682[(2)]);
var inst_28645 = (inst_28637 + (1));
var tmp28691 = inst_28636;
var tmp28692 = inst_28635;
var tmp28693 = inst_28634;
var inst_28634__$1 = tmp28693;
var inst_28635__$1 = tmp28692;
var inst_28636__$1 = tmp28691;
var inst_28637__$1 = inst_28645;
var state_28682__$1 = (function (){var statearr_28696 = state_28682;
(statearr_28696[(9)] = inst_28636__$1);

(statearr_28696[(10)] = inst_28635__$1);

(statearr_28696[(11)] = inst_28637__$1);

(statearr_28696[(12)] = inst_28634__$1);

(statearr_28696[(14)] = inst_28644);

return statearr_28696;
})();
var statearr_28697_28732 = state_28682__$1;
(statearr_28697_28732[(2)] = null);

(statearr_28697_28732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (22))){
var state_28682__$1 = state_28682;
var statearr_28698_28733 = state_28682__$1;
(statearr_28698_28733[(2)] = null);

(statearr_28698_28733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (6))){
var inst_28623 = (state_28682[(13)]);
var inst_28632 = f.call(null,inst_28623);
var inst_28633 = cljs.core.seq.call(null,inst_28632);
var inst_28634 = inst_28633;
var inst_28635 = null;
var inst_28636 = (0);
var inst_28637 = (0);
var state_28682__$1 = (function (){var statearr_28699 = state_28682;
(statearr_28699[(9)] = inst_28636);

(statearr_28699[(10)] = inst_28635);

(statearr_28699[(11)] = inst_28637);

(statearr_28699[(12)] = inst_28634);

return statearr_28699;
})();
var statearr_28700_28734 = state_28682__$1;
(statearr_28700_28734[(2)] = null);

(statearr_28700_28734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (17))){
var inst_28648 = (state_28682[(7)]);
var inst_28652 = cljs.core.chunk_first.call(null,inst_28648);
var inst_28653 = cljs.core.chunk_rest.call(null,inst_28648);
var inst_28654 = cljs.core.count.call(null,inst_28652);
var inst_28634 = inst_28653;
var inst_28635 = inst_28652;
var inst_28636 = inst_28654;
var inst_28637 = (0);
var state_28682__$1 = (function (){var statearr_28701 = state_28682;
(statearr_28701[(9)] = inst_28636);

(statearr_28701[(10)] = inst_28635);

(statearr_28701[(11)] = inst_28637);

(statearr_28701[(12)] = inst_28634);

return statearr_28701;
})();
var statearr_28702_28735 = state_28682__$1;
(statearr_28702_28735[(2)] = null);

(statearr_28702_28735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (3))){
var inst_28680 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28682__$1,inst_28680);
} else {
if((state_val_28683 === (12))){
var inst_28668 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28703_28736 = state_28682__$1;
(statearr_28703_28736[(2)] = inst_28668);

(statearr_28703_28736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (2))){
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28682__$1,(4),in$);
} else {
if((state_val_28683 === (23))){
var inst_28676 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28704_28737 = state_28682__$1;
(statearr_28704_28737[(2)] = inst_28676);

(statearr_28704_28737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (19))){
var inst_28663 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28705_28738 = state_28682__$1;
(statearr_28705_28738[(2)] = inst_28663);

(statearr_28705_28738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (11))){
var inst_28648 = (state_28682[(7)]);
var inst_28634 = (state_28682[(12)]);
var inst_28648__$1 = cljs.core.seq.call(null,inst_28634);
var state_28682__$1 = (function (){var statearr_28706 = state_28682;
(statearr_28706[(7)] = inst_28648__$1);

return statearr_28706;
})();
if(inst_28648__$1){
var statearr_28707_28739 = state_28682__$1;
(statearr_28707_28739[(1)] = (14));

} else {
var statearr_28708_28740 = state_28682__$1;
(statearr_28708_28740[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (9))){
var inst_28670 = (state_28682[(2)]);
var inst_28671 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28682__$1 = (function (){var statearr_28709 = state_28682;
(statearr_28709[(15)] = inst_28670);

return statearr_28709;
})();
if(cljs.core.truth_(inst_28671)){
var statearr_28710_28741 = state_28682__$1;
(statearr_28710_28741[(1)] = (21));

} else {
var statearr_28711_28742 = state_28682__$1;
(statearr_28711_28742[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (5))){
var inst_28626 = cljs.core.async.close_BANG_.call(null,out);
var state_28682__$1 = state_28682;
var statearr_28712_28743 = state_28682__$1;
(statearr_28712_28743[(2)] = inst_28626);

(statearr_28712_28743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (14))){
var inst_28648 = (state_28682[(7)]);
var inst_28650 = cljs.core.chunked_seq_QMARK_.call(null,inst_28648);
var state_28682__$1 = state_28682;
if(inst_28650){
var statearr_28713_28744 = state_28682__$1;
(statearr_28713_28744[(1)] = (17));

} else {
var statearr_28714_28745 = state_28682__$1;
(statearr_28714_28745[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (16))){
var inst_28666 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28715_28746 = state_28682__$1;
(statearr_28715_28746[(2)] = inst_28666);

(statearr_28715_28746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (10))){
var inst_28635 = (state_28682[(10)]);
var inst_28637 = (state_28682[(11)]);
var inst_28642 = cljs.core._nth.call(null,inst_28635,inst_28637);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28682__$1,(13),out,inst_28642);
} else {
if((state_val_28683 === (18))){
var inst_28648 = (state_28682[(7)]);
var inst_28657 = cljs.core.first.call(null,inst_28648);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28682__$1,(20),out,inst_28657);
} else {
if((state_val_28683 === (8))){
var inst_28636 = (state_28682[(9)]);
var inst_28637 = (state_28682[(11)]);
var inst_28639 = (inst_28637 < inst_28636);
var inst_28640 = inst_28639;
var state_28682__$1 = state_28682;
if(cljs.core.truth_(inst_28640)){
var statearr_28716_28747 = state_28682__$1;
(statearr_28716_28747[(1)] = (10));

} else {
var statearr_28717_28748 = state_28682__$1;
(statearr_28717_28748[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto__))
;
return ((function (switch__21033__auto__,c__21095__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21034__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21034__auto____0 = (function (){
var statearr_28721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28721[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21034__auto__);

(statearr_28721[(1)] = (1));

return statearr_28721;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21034__auto____1 = (function (state_28682){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28722){if((e28722 instanceof Object)){
var ex__21037__auto__ = e28722;
var statearr_28723_28749 = state_28682;
(statearr_28723_28749[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28750 = state_28682;
state_28682 = G__28750;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21034__auto__ = function(state_28682){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21034__auto____1.call(this,state_28682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21034__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21034__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto__))
})();
var state__21097__auto__ = (function (){var statearr_28724 = f__21096__auto__.call(null);
(statearr_28724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto__);

return statearr_28724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto__))
);

return c__21095__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28752 = arguments.length;
switch (G__28752) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28755 = arguments.length;
switch (G__28755) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28758 = arguments.length;
switch (G__28758) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21095__auto___28808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28808,out){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28808,out){
return (function (state_28782){
var state_val_28783 = (state_28782[(1)]);
if((state_val_28783 === (7))){
var inst_28777 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28784_28809 = state_28782__$1;
(statearr_28784_28809[(2)] = inst_28777);

(statearr_28784_28809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (1))){
var inst_28759 = null;
var state_28782__$1 = (function (){var statearr_28785 = state_28782;
(statearr_28785[(7)] = inst_28759);

return statearr_28785;
})();
var statearr_28786_28810 = state_28782__$1;
(statearr_28786_28810[(2)] = null);

(statearr_28786_28810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (4))){
var inst_28762 = (state_28782[(8)]);
var inst_28762__$1 = (state_28782[(2)]);
var inst_28763 = (inst_28762__$1 == null);
var inst_28764 = cljs.core.not.call(null,inst_28763);
var state_28782__$1 = (function (){var statearr_28787 = state_28782;
(statearr_28787[(8)] = inst_28762__$1);

return statearr_28787;
})();
if(inst_28764){
var statearr_28788_28811 = state_28782__$1;
(statearr_28788_28811[(1)] = (5));

} else {
var statearr_28789_28812 = state_28782__$1;
(statearr_28789_28812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (6))){
var state_28782__$1 = state_28782;
var statearr_28790_28813 = state_28782__$1;
(statearr_28790_28813[(2)] = null);

(statearr_28790_28813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (3))){
var inst_28779 = (state_28782[(2)]);
var inst_28780 = cljs.core.async.close_BANG_.call(null,out);
var state_28782__$1 = (function (){var statearr_28791 = state_28782;
(statearr_28791[(9)] = inst_28779);

return statearr_28791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28782__$1,inst_28780);
} else {
if((state_val_28783 === (2))){
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28782__$1,(4),ch);
} else {
if((state_val_28783 === (11))){
var inst_28762 = (state_28782[(8)]);
var inst_28771 = (state_28782[(2)]);
var inst_28759 = inst_28762;
var state_28782__$1 = (function (){var statearr_28792 = state_28782;
(statearr_28792[(7)] = inst_28759);

(statearr_28792[(10)] = inst_28771);

return statearr_28792;
})();
var statearr_28793_28814 = state_28782__$1;
(statearr_28793_28814[(2)] = null);

(statearr_28793_28814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (9))){
var inst_28762 = (state_28782[(8)]);
var state_28782__$1 = state_28782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28782__$1,(11),out,inst_28762);
} else {
if((state_val_28783 === (5))){
var inst_28762 = (state_28782[(8)]);
var inst_28759 = (state_28782[(7)]);
var inst_28766 = cljs.core._EQ_.call(null,inst_28762,inst_28759);
var state_28782__$1 = state_28782;
if(inst_28766){
var statearr_28795_28815 = state_28782__$1;
(statearr_28795_28815[(1)] = (8));

} else {
var statearr_28796_28816 = state_28782__$1;
(statearr_28796_28816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (10))){
var inst_28774 = (state_28782[(2)]);
var state_28782__$1 = state_28782;
var statearr_28797_28817 = state_28782__$1;
(statearr_28797_28817[(2)] = inst_28774);

(statearr_28797_28817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28783 === (8))){
var inst_28759 = (state_28782[(7)]);
var tmp28794 = inst_28759;
var inst_28759__$1 = tmp28794;
var state_28782__$1 = (function (){var statearr_28798 = state_28782;
(statearr_28798[(7)] = inst_28759__$1);

return statearr_28798;
})();
var statearr_28799_28818 = state_28782__$1;
(statearr_28799_28818[(2)] = null);

(statearr_28799_28818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28808,out))
;
return ((function (switch__21033__auto__,c__21095__auto___28808,out){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_28803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28803[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_28803[(1)] = (1));

return statearr_28803;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_28782){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28804){if((e28804 instanceof Object)){
var ex__21037__auto__ = e28804;
var statearr_28805_28819 = state_28782;
(statearr_28805_28819[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28820 = state_28782;
state_28782 = G__28820;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_28782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_28782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28808,out))
})();
var state__21097__auto__ = (function (){var statearr_28806 = f__21096__auto__.call(null);
(statearr_28806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28808);

return statearr_28806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28808,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28822 = arguments.length;
switch (G__28822) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21095__auto___28891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28891,out){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28891,out){
return (function (state_28860){
var state_val_28861 = (state_28860[(1)]);
if((state_val_28861 === (7))){
var inst_28856 = (state_28860[(2)]);
var state_28860__$1 = state_28860;
var statearr_28862_28892 = state_28860__$1;
(statearr_28862_28892[(2)] = inst_28856);

(statearr_28862_28892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (1))){
var inst_28823 = (new Array(n));
var inst_28824 = inst_28823;
var inst_28825 = (0);
var state_28860__$1 = (function (){var statearr_28863 = state_28860;
(statearr_28863[(7)] = inst_28825);

(statearr_28863[(8)] = inst_28824);

return statearr_28863;
})();
var statearr_28864_28893 = state_28860__$1;
(statearr_28864_28893[(2)] = null);

(statearr_28864_28893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (4))){
var inst_28828 = (state_28860[(9)]);
var inst_28828__$1 = (state_28860[(2)]);
var inst_28829 = (inst_28828__$1 == null);
var inst_28830 = cljs.core.not.call(null,inst_28829);
var state_28860__$1 = (function (){var statearr_28865 = state_28860;
(statearr_28865[(9)] = inst_28828__$1);

return statearr_28865;
})();
if(inst_28830){
var statearr_28866_28894 = state_28860__$1;
(statearr_28866_28894[(1)] = (5));

} else {
var statearr_28867_28895 = state_28860__$1;
(statearr_28867_28895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (15))){
var inst_28850 = (state_28860[(2)]);
var state_28860__$1 = state_28860;
var statearr_28868_28896 = state_28860__$1;
(statearr_28868_28896[(2)] = inst_28850);

(statearr_28868_28896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (13))){
var state_28860__$1 = state_28860;
var statearr_28869_28897 = state_28860__$1;
(statearr_28869_28897[(2)] = null);

(statearr_28869_28897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (6))){
var inst_28825 = (state_28860[(7)]);
var inst_28846 = (inst_28825 > (0));
var state_28860__$1 = state_28860;
if(cljs.core.truth_(inst_28846)){
var statearr_28870_28898 = state_28860__$1;
(statearr_28870_28898[(1)] = (12));

} else {
var statearr_28871_28899 = state_28860__$1;
(statearr_28871_28899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (3))){
var inst_28858 = (state_28860[(2)]);
var state_28860__$1 = state_28860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28860__$1,inst_28858);
} else {
if((state_val_28861 === (12))){
var inst_28824 = (state_28860[(8)]);
var inst_28848 = cljs.core.vec.call(null,inst_28824);
var state_28860__$1 = state_28860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28860__$1,(15),out,inst_28848);
} else {
if((state_val_28861 === (2))){
var state_28860__$1 = state_28860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28860__$1,(4),ch);
} else {
if((state_val_28861 === (11))){
var inst_28840 = (state_28860[(2)]);
var inst_28841 = (new Array(n));
var inst_28824 = inst_28841;
var inst_28825 = (0);
var state_28860__$1 = (function (){var statearr_28872 = state_28860;
(statearr_28872[(7)] = inst_28825);

(statearr_28872[(8)] = inst_28824);

(statearr_28872[(10)] = inst_28840);

return statearr_28872;
})();
var statearr_28873_28900 = state_28860__$1;
(statearr_28873_28900[(2)] = null);

(statearr_28873_28900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (9))){
var inst_28824 = (state_28860[(8)]);
var inst_28838 = cljs.core.vec.call(null,inst_28824);
var state_28860__$1 = state_28860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28860__$1,(11),out,inst_28838);
} else {
if((state_val_28861 === (5))){
var inst_28825 = (state_28860[(7)]);
var inst_28824 = (state_28860[(8)]);
var inst_28828 = (state_28860[(9)]);
var inst_28833 = (state_28860[(11)]);
var inst_28832 = (inst_28824[inst_28825] = inst_28828);
var inst_28833__$1 = (inst_28825 + (1));
var inst_28834 = (inst_28833__$1 < n);
var state_28860__$1 = (function (){var statearr_28874 = state_28860;
(statearr_28874[(12)] = inst_28832);

(statearr_28874[(11)] = inst_28833__$1);

return statearr_28874;
})();
if(cljs.core.truth_(inst_28834)){
var statearr_28875_28901 = state_28860__$1;
(statearr_28875_28901[(1)] = (8));

} else {
var statearr_28876_28902 = state_28860__$1;
(statearr_28876_28902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (14))){
var inst_28853 = (state_28860[(2)]);
var inst_28854 = cljs.core.async.close_BANG_.call(null,out);
var state_28860__$1 = (function (){var statearr_28878 = state_28860;
(statearr_28878[(13)] = inst_28853);

return statearr_28878;
})();
var statearr_28879_28903 = state_28860__$1;
(statearr_28879_28903[(2)] = inst_28854);

(statearr_28879_28903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (10))){
var inst_28844 = (state_28860[(2)]);
var state_28860__$1 = state_28860;
var statearr_28880_28904 = state_28860__$1;
(statearr_28880_28904[(2)] = inst_28844);

(statearr_28880_28904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28861 === (8))){
var inst_28824 = (state_28860[(8)]);
var inst_28833 = (state_28860[(11)]);
var tmp28877 = inst_28824;
var inst_28824__$1 = tmp28877;
var inst_28825 = inst_28833;
var state_28860__$1 = (function (){var statearr_28881 = state_28860;
(statearr_28881[(7)] = inst_28825);

(statearr_28881[(8)] = inst_28824__$1);

return statearr_28881;
})();
var statearr_28882_28905 = state_28860__$1;
(statearr_28882_28905[(2)] = null);

(statearr_28882_28905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28891,out))
;
return ((function (switch__21033__auto__,c__21095__auto___28891,out){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_28886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28886[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_28886[(1)] = (1));

return statearr_28886;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_28860){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28887){if((e28887 instanceof Object)){
var ex__21037__auto__ = e28887;
var statearr_28888_28906 = state_28860;
(statearr_28888_28906[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28907 = state_28860;
state_28860 = G__28907;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_28860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_28860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28891,out))
})();
var state__21097__auto__ = (function (){var statearr_28889 = f__21096__auto__.call(null);
(statearr_28889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28891);

return statearr_28889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28891,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28909 = arguments.length;
switch (G__28909) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21095__auto___28982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___28982,out){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___28982,out){
return (function (state_28951){
var state_val_28952 = (state_28951[(1)]);
if((state_val_28952 === (7))){
var inst_28947 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28953_28983 = state_28951__$1;
(statearr_28953_28983[(2)] = inst_28947);

(statearr_28953_28983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (1))){
var inst_28910 = [];
var inst_28911 = inst_28910;
var inst_28912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28951__$1 = (function (){var statearr_28954 = state_28951;
(statearr_28954[(7)] = inst_28911);

(statearr_28954[(8)] = inst_28912);

return statearr_28954;
})();
var statearr_28955_28984 = state_28951__$1;
(statearr_28955_28984[(2)] = null);

(statearr_28955_28984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (4))){
var inst_28915 = (state_28951[(9)]);
var inst_28915__$1 = (state_28951[(2)]);
var inst_28916 = (inst_28915__$1 == null);
var inst_28917 = cljs.core.not.call(null,inst_28916);
var state_28951__$1 = (function (){var statearr_28956 = state_28951;
(statearr_28956[(9)] = inst_28915__$1);

return statearr_28956;
})();
if(inst_28917){
var statearr_28957_28985 = state_28951__$1;
(statearr_28957_28985[(1)] = (5));

} else {
var statearr_28958_28986 = state_28951__$1;
(statearr_28958_28986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (15))){
var inst_28941 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28959_28987 = state_28951__$1;
(statearr_28959_28987[(2)] = inst_28941);

(statearr_28959_28987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (13))){
var state_28951__$1 = state_28951;
var statearr_28960_28988 = state_28951__$1;
(statearr_28960_28988[(2)] = null);

(statearr_28960_28988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (6))){
var inst_28911 = (state_28951[(7)]);
var inst_28936 = inst_28911.length;
var inst_28937 = (inst_28936 > (0));
var state_28951__$1 = state_28951;
if(cljs.core.truth_(inst_28937)){
var statearr_28961_28989 = state_28951__$1;
(statearr_28961_28989[(1)] = (12));

} else {
var statearr_28962_28990 = state_28951__$1;
(statearr_28962_28990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (3))){
var inst_28949 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28951__$1,inst_28949);
} else {
if((state_val_28952 === (12))){
var inst_28911 = (state_28951[(7)]);
var inst_28939 = cljs.core.vec.call(null,inst_28911);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28951__$1,(15),out,inst_28939);
} else {
if((state_val_28952 === (2))){
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28951__$1,(4),ch);
} else {
if((state_val_28952 === (11))){
var inst_28919 = (state_28951[(10)]);
var inst_28915 = (state_28951[(9)]);
var inst_28929 = (state_28951[(2)]);
var inst_28930 = [];
var inst_28931 = inst_28930.push(inst_28915);
var inst_28911 = inst_28930;
var inst_28912 = inst_28919;
var state_28951__$1 = (function (){var statearr_28963 = state_28951;
(statearr_28963[(11)] = inst_28931);

(statearr_28963[(7)] = inst_28911);

(statearr_28963[(8)] = inst_28912);

(statearr_28963[(12)] = inst_28929);

return statearr_28963;
})();
var statearr_28964_28991 = state_28951__$1;
(statearr_28964_28991[(2)] = null);

(statearr_28964_28991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (9))){
var inst_28911 = (state_28951[(7)]);
var inst_28927 = cljs.core.vec.call(null,inst_28911);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28951__$1,(11),out,inst_28927);
} else {
if((state_val_28952 === (5))){
var inst_28912 = (state_28951[(8)]);
var inst_28919 = (state_28951[(10)]);
var inst_28915 = (state_28951[(9)]);
var inst_28919__$1 = f.call(null,inst_28915);
var inst_28920 = cljs.core._EQ_.call(null,inst_28919__$1,inst_28912);
var inst_28921 = cljs.core.keyword_identical_QMARK_.call(null,inst_28912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28922 = (inst_28920) || (inst_28921);
var state_28951__$1 = (function (){var statearr_28965 = state_28951;
(statearr_28965[(10)] = inst_28919__$1);

return statearr_28965;
})();
if(cljs.core.truth_(inst_28922)){
var statearr_28966_28992 = state_28951__$1;
(statearr_28966_28992[(1)] = (8));

} else {
var statearr_28967_28993 = state_28951__$1;
(statearr_28967_28993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (14))){
var inst_28944 = (state_28951[(2)]);
var inst_28945 = cljs.core.async.close_BANG_.call(null,out);
var state_28951__$1 = (function (){var statearr_28969 = state_28951;
(statearr_28969[(13)] = inst_28944);

return statearr_28969;
})();
var statearr_28970_28994 = state_28951__$1;
(statearr_28970_28994[(2)] = inst_28945);

(statearr_28970_28994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (10))){
var inst_28934 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28971_28995 = state_28951__$1;
(statearr_28971_28995[(2)] = inst_28934);

(statearr_28971_28995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (8))){
var inst_28911 = (state_28951[(7)]);
var inst_28919 = (state_28951[(10)]);
var inst_28915 = (state_28951[(9)]);
var inst_28924 = inst_28911.push(inst_28915);
var tmp28968 = inst_28911;
var inst_28911__$1 = tmp28968;
var inst_28912 = inst_28919;
var state_28951__$1 = (function (){var statearr_28972 = state_28951;
(statearr_28972[(7)] = inst_28911__$1);

(statearr_28972[(8)] = inst_28912);

(statearr_28972[(14)] = inst_28924);

return statearr_28972;
})();
var statearr_28973_28996 = state_28951__$1;
(statearr_28973_28996[(2)] = null);

(statearr_28973_28996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21095__auto___28982,out))
;
return ((function (switch__21033__auto__,c__21095__auto___28982,out){
return (function() {
var cljs$core$async$state_machine__21034__auto__ = null;
var cljs$core$async$state_machine__21034__auto____0 = (function (){
var statearr_28977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28977[(0)] = cljs$core$async$state_machine__21034__auto__);

(statearr_28977[(1)] = (1));

return statearr_28977;
});
var cljs$core$async$state_machine__21034__auto____1 = (function (state_28951){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_28951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e28978){if((e28978 instanceof Object)){
var ex__21037__auto__ = e28978;
var statearr_28979_28997 = state_28951;
(statearr_28979_28997[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28998 = state_28951;
state_28951 = G__28998;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
cljs$core$async$state_machine__21034__auto__ = function(state_28951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21034__auto____1.call(this,state_28951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21034__auto____0;
cljs$core$async$state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21034__auto____1;
return cljs$core$async$state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___28982,out))
})();
var state__21097__auto__ = (function (){var statearr_28980 = f__21096__auto__.call(null);
(statearr_28980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___28982);

return statearr_28980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___28982,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map