// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__25795_SHARP_,p2__25796_SHARP_){
var and__18073__auto__ = p1__25795_SHARP_;
if(cljs.core.truth_(and__18073__auto__)){
return p2__25796_SHARP_;
} else {
return and__18073__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18085__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18085__auto__){
return or__18085__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18085__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18085__auto__){
return or__18085__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18085__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18984__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18984__auto__,method_table__18980__auto__,prefer_table__18981__auto__,method_cache__18982__auto__,cached_hierarchy__18983__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25797){
var map__25798 = p__25797;
var map__25798__$1 = ((cljs.core.seq_QMARK_.call(null,map__25798))?cljs.core.apply.call(null,cljs.core.hash_map,map__25798):map__25798);
var file = cljs.core.get.call(null,map__25798__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25799){
var map__25800 = p__25799;
var map__25800__$1 = ((cljs.core.seq_QMARK_.call(null,map__25800))?cljs.core.apply.call(null,cljs.core.hash_map,map__25800):map__25800);
var namespace = cljs.core.get.call(null,map__25800__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18984__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18984__auto__,method_table__18980__auto__,prefer_table__18981__auto__,method_cache__18982__auto__,cached_hierarchy__18983__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25801){if((e25801 instanceof Error)){
var e = e25801;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25801;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__25803 = arguments.length;
switch (G__25803) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25805,callback){
var map__25807 = p__25805;
var map__25807__$1 = ((cljs.core.seq_QMARK_.call(null,map__25807))?cljs.core.apply.call(null,cljs.core.hash_map,map__25807):map__25807);
var file_msg = map__25807__$1;
var request_url = cljs.core.get.call(null,map__25807__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25807,map__25807__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25807,map__25807__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25808){
var map__25810 = p__25808;
var map__25810__$1 = ((cljs.core.seq_QMARK_.call(null,map__25810))?cljs.core.apply.call(null,cljs.core.hash_map,map__25810):map__25810);
var file_msg = map__25810__$1;
var namespace = cljs.core.get.call(null,map__25810__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__25810__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18085__auto__ = meta_data;
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18073__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18073__auto__){
var or__18085__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
var or__18085__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18085__auto____$1)){
return or__18085__auto____$1;
} else {
var and__18073__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18073__auto____$1){
var or__18085__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18085__auto____$2){
return or__18085__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18073__auto____$1;
}
}
}
} else {
return and__18073__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25811,callback){
var map__25813 = p__25811;
var map__25813__$1 = ((cljs.core.seq_QMARK_.call(null,map__25813))?cljs.core.apply.call(null,cljs.core.hash_map,map__25813):map__25813);
var file_msg = map__25813__$1;
var request_url = cljs.core.get.call(null,map__25813__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25813__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21095__auto___25900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___25900,out){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___25900,out){
return (function (state_25882){
var state_val_25883 = (state_25882[(1)]);
if((state_val_25883 === (1))){
var inst_25860 = cljs.core.nth.call(null,files,(0),null);
var inst_25861 = cljs.core.nthnext.call(null,files,(1));
var inst_25862 = files;
var state_25882__$1 = (function (){var statearr_25884 = state_25882;
(statearr_25884[(7)] = inst_25860);

(statearr_25884[(8)] = inst_25861);

(statearr_25884[(9)] = inst_25862);

return statearr_25884;
})();
var statearr_25885_25901 = state_25882__$1;
(statearr_25885_25901[(2)] = null);

(statearr_25885_25901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (2))){
var inst_25865 = (state_25882[(10)]);
var inst_25862 = (state_25882[(9)]);
var inst_25865__$1 = cljs.core.nth.call(null,inst_25862,(0),null);
var inst_25866 = cljs.core.nthnext.call(null,inst_25862,(1));
var inst_25867 = (inst_25865__$1 == null);
var inst_25868 = cljs.core.not.call(null,inst_25867);
var state_25882__$1 = (function (){var statearr_25886 = state_25882;
(statearr_25886[(11)] = inst_25866);

(statearr_25886[(10)] = inst_25865__$1);

return statearr_25886;
})();
if(inst_25868){
var statearr_25887_25902 = state_25882__$1;
(statearr_25887_25902[(1)] = (4));

} else {
var statearr_25888_25903 = state_25882__$1;
(statearr_25888_25903[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (3))){
var inst_25880 = (state_25882[(2)]);
var state_25882__$1 = state_25882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25882__$1,inst_25880);
} else {
if((state_val_25883 === (4))){
var inst_25865 = (state_25882[(10)]);
var inst_25870 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25865);
var state_25882__$1 = state_25882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25882__$1,(7),inst_25870);
} else {
if((state_val_25883 === (5))){
var inst_25876 = cljs.core.async.close_BANG_.call(null,out);
var state_25882__$1 = state_25882;
var statearr_25889_25904 = state_25882__$1;
(statearr_25889_25904[(2)] = inst_25876);

(statearr_25889_25904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (6))){
var inst_25878 = (state_25882[(2)]);
var state_25882__$1 = state_25882;
var statearr_25890_25905 = state_25882__$1;
(statearr_25890_25905[(2)] = inst_25878);

(statearr_25890_25905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (7))){
var inst_25866 = (state_25882[(11)]);
var inst_25872 = (state_25882[(2)]);
var inst_25873 = cljs.core.async.put_BANG_.call(null,out,inst_25872);
var inst_25862 = inst_25866;
var state_25882__$1 = (function (){var statearr_25891 = state_25882;
(statearr_25891[(12)] = inst_25873);

(statearr_25891[(9)] = inst_25862);

return statearr_25891;
})();
var statearr_25892_25906 = state_25882__$1;
(statearr_25892_25906[(2)] = null);

(statearr_25892_25906[(1)] = (2));


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
});})(c__21095__auto___25900,out))
;
return ((function (switch__21033__auto__,c__21095__auto___25900,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto____0 = (function (){
var statearr_25896 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25896[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto__);

(statearr_25896[(1)] = (1));

return statearr_25896;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto____1 = (function (state_25882){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_25882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e25897){if((e25897 instanceof Object)){
var ex__21037__auto__ = e25897;
var statearr_25898_25907 = state_25882;
(statearr_25898_25907[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25908 = state_25882;
state_25882 = G__25908;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto__ = function(state_25882){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto____1.call(this,state_25882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___25900,out))
})();
var state__21097__auto__ = (function (){var statearr_25899 = f__21096__auto__.call(null);
(statearr_25899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___25900);

return statearr_25899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___25900,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25909,p__25910){
var map__25913 = p__25909;
var map__25913__$1 = ((cljs.core.seq_QMARK_.call(null,map__25913))?cljs.core.apply.call(null,cljs.core.hash_map,map__25913):map__25913);
var opts = map__25913__$1;
var url_rewriter = cljs.core.get.call(null,map__25913__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25914 = p__25910;
var map__25914__$1 = ((cljs.core.seq_QMARK_.call(null,map__25914))?cljs.core.apply.call(null,cljs.core.hash_map,map__25914):map__25914);
var file_msg = map__25914__$1;
var file = cljs.core.get.call(null,map__25914__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25915){
var map__25918 = p__25915;
var map__25918__$1 = ((cljs.core.seq_QMARK_.call(null,map__25918))?cljs.core.apply.call(null,cljs.core.hash_map,map__25918):map__25918);
var eval_body__$1 = cljs.core.get.call(null,map__25918__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18073__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18073__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18073__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e25919){var e = e25919;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25924,p__25925){
var map__26127 = p__25924;
var map__26127__$1 = ((cljs.core.seq_QMARK_.call(null,map__26127))?cljs.core.apply.call(null,cljs.core.hash_map,map__26127):map__26127);
var opts = map__26127__$1;
var before_jsload = cljs.core.get.call(null,map__26127__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26127__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__26127__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__26128 = p__25925;
var map__26128__$1 = ((cljs.core.seq_QMARK_.call(null,map__26128))?cljs.core.apply.call(null,cljs.core.hash_map,map__26128):map__26128);
var msg = map__26128__$1;
var files = cljs.core.get.call(null,map__26128__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (state_26253){
var state_val_26254 = (state_26253[(1)]);
if((state_val_26254 === (7))){
var inst_26142 = (state_26253[(7)]);
var inst_26143 = (state_26253[(8)]);
var inst_26140 = (state_26253[(9)]);
var inst_26141 = (state_26253[(10)]);
var inst_26148 = cljs.core._nth.call(null,inst_26141,inst_26143);
var inst_26149 = figwheel.client.file_reloading.eval_body.call(null,inst_26148);
var inst_26150 = (inst_26143 + (1));
var tmp26255 = inst_26142;
var tmp26256 = inst_26140;
var tmp26257 = inst_26141;
var inst_26140__$1 = tmp26256;
var inst_26141__$1 = tmp26257;
var inst_26142__$1 = tmp26255;
var inst_26143__$1 = inst_26150;
var state_26253__$1 = (function (){var statearr_26258 = state_26253;
(statearr_26258[(7)] = inst_26142__$1);

(statearr_26258[(11)] = inst_26149);

(statearr_26258[(8)] = inst_26143__$1);

(statearr_26258[(9)] = inst_26140__$1);

(statearr_26258[(10)] = inst_26141__$1);

return statearr_26258;
})();
var statearr_26259_26328 = state_26253__$1;
(statearr_26259_26328[(2)] = null);

(statearr_26259_26328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (20))){
var inst_26185 = (state_26253[(12)]);
var inst_26190 = (state_26253[(13)]);
var inst_26189 = (state_26253[(14)]);
var inst_26186 = (state_26253[(15)]);
var inst_26192 = (state_26253[(16)]);
var inst_26195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26197 = (function (){var all_files = inst_26185;
var files_SINGLEQUOTE_ = inst_26186;
var res_SINGLEQUOTE_ = inst_26189;
var res = inst_26190;
var files_not_loaded = inst_26192;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26185,inst_26190,inst_26189,inst_26186,inst_26192,inst_26195,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (p__26196){
var map__26260 = p__26196;
var map__26260__$1 = ((cljs.core.seq_QMARK_.call(null,map__26260))?cljs.core.apply.call(null,cljs.core.hash_map,map__26260):map__26260);
var namespace = cljs.core.get.call(null,map__26260__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26185,inst_26190,inst_26189,inst_26186,inst_26192,inst_26195,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
})();
var inst_26198 = cljs.core.map.call(null,inst_26197,inst_26190);
var inst_26199 = cljs.core.pr_str.call(null,inst_26198);
var inst_26200 = figwheel.client.utils.log.call(null,inst_26199);
var inst_26201 = (function (){var all_files = inst_26185;
var files_SINGLEQUOTE_ = inst_26186;
var res_SINGLEQUOTE_ = inst_26189;
var res = inst_26190;
var files_not_loaded = inst_26192;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26185,inst_26190,inst_26189,inst_26186,inst_26192,inst_26195,inst_26197,inst_26198,inst_26199,inst_26200,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26185,inst_26190,inst_26189,inst_26186,inst_26192,inst_26195,inst_26197,inst_26198,inst_26199,inst_26200,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
})();
var inst_26202 = setTimeout(inst_26201,(10));
var state_26253__$1 = (function (){var statearr_26261 = state_26253;
(statearr_26261[(17)] = inst_26195);

(statearr_26261[(18)] = inst_26200);

return statearr_26261;
})();
var statearr_26262_26329 = state_26253__$1;
(statearr_26262_26329[(2)] = inst_26202);

(statearr_26262_26329[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (27))){
var inst_26212 = (state_26253[(19)]);
var state_26253__$1 = state_26253;
var statearr_26263_26330 = state_26253__$1;
(statearr_26263_26330[(2)] = inst_26212);

(statearr_26263_26330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (1))){
var inst_26132 = (state_26253[(20)]);
var inst_26129 = before_jsload.call(null,files);
var inst_26130 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26131 = (function (){return ((function (inst_26132,inst_26129,inst_26130,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (p1__25920_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25920_SHARP_);
});
;})(inst_26132,inst_26129,inst_26130,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
})();
var inst_26132__$1 = cljs.core.filter.call(null,inst_26131,files);
var inst_26133 = cljs.core.not_empty.call(null,inst_26132__$1);
var state_26253__$1 = (function (){var statearr_26264 = state_26253;
(statearr_26264[(21)] = inst_26129);

(statearr_26264[(20)] = inst_26132__$1);

(statearr_26264[(22)] = inst_26130);

return statearr_26264;
})();
if(cljs.core.truth_(inst_26133)){
var statearr_26265_26331 = state_26253__$1;
(statearr_26265_26331[(1)] = (2));

} else {
var statearr_26266_26332 = state_26253__$1;
(statearr_26266_26332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (24))){
var state_26253__$1 = state_26253;
var statearr_26267_26333 = state_26253__$1;
(statearr_26267_26333[(2)] = null);

(statearr_26267_26333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (4))){
var inst_26177 = (state_26253[(2)]);
var inst_26178 = (function (){return ((function (inst_26177,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (p1__25921_SHARP_){
var and__18073__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25921_SHARP_);
if(cljs.core.truth_(and__18073__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25921_SHARP_));
} else {
return and__18073__auto__;
}
});
;})(inst_26177,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
})();
var inst_26179 = cljs.core.filter.call(null,inst_26178,files);
var state_26253__$1 = (function (){var statearr_26268 = state_26253;
(statearr_26268[(23)] = inst_26179);

(statearr_26268[(24)] = inst_26177);

return statearr_26268;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26269_26334 = state_26253__$1;
(statearr_26269_26334[(1)] = (16));

} else {
var statearr_26270_26335 = state_26253__$1;
(statearr_26270_26335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (15))){
var inst_26167 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26271_26336 = state_26253__$1;
(statearr_26271_26336[(2)] = inst_26167);

(statearr_26271_26336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (21))){
var state_26253__$1 = state_26253;
var statearr_26272_26337 = state_26253__$1;
(statearr_26272_26337[(2)] = null);

(statearr_26272_26337[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (31))){
var inst_26220 = (state_26253[(25)]);
var inst_26230 = (state_26253[(2)]);
var inst_26231 = cljs.core.not_empty.call(null,inst_26220);
var state_26253__$1 = (function (){var statearr_26273 = state_26253;
(statearr_26273[(26)] = inst_26230);

return statearr_26273;
})();
if(cljs.core.truth_(inst_26231)){
var statearr_26274_26338 = state_26253__$1;
(statearr_26274_26338[(1)] = (32));

} else {
var statearr_26275_26339 = state_26253__$1;
(statearr_26275_26339[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (32))){
var inst_26220 = (state_26253[(25)]);
var inst_26233 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26220);
var inst_26234 = cljs.core.pr_str.call(null,inst_26233);
var inst_26235 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26234)].join('');
var inst_26236 = figwheel.client.utils.log.call(null,inst_26235);
var state_26253__$1 = state_26253;
var statearr_26276_26340 = state_26253__$1;
(statearr_26276_26340[(2)] = inst_26236);

(statearr_26276_26340[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (33))){
var state_26253__$1 = state_26253;
var statearr_26277_26341 = state_26253__$1;
(statearr_26277_26341[(2)] = null);

(statearr_26277_26341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (13))){
var inst_26153 = (state_26253[(27)]);
var inst_26157 = cljs.core.chunk_first.call(null,inst_26153);
var inst_26158 = cljs.core.chunk_rest.call(null,inst_26153);
var inst_26159 = cljs.core.count.call(null,inst_26157);
var inst_26140 = inst_26158;
var inst_26141 = inst_26157;
var inst_26142 = inst_26159;
var inst_26143 = (0);
var state_26253__$1 = (function (){var statearr_26278 = state_26253;
(statearr_26278[(7)] = inst_26142);

(statearr_26278[(8)] = inst_26143);

(statearr_26278[(9)] = inst_26140);

(statearr_26278[(10)] = inst_26141);

return statearr_26278;
})();
var statearr_26279_26342 = state_26253__$1;
(statearr_26279_26342[(2)] = null);

(statearr_26279_26342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (22))){
var inst_26192 = (state_26253[(16)]);
var inst_26205 = (state_26253[(2)]);
var inst_26206 = cljs.core.not_empty.call(null,inst_26192);
var state_26253__$1 = (function (){var statearr_26280 = state_26253;
(statearr_26280[(28)] = inst_26205);

return statearr_26280;
})();
if(cljs.core.truth_(inst_26206)){
var statearr_26281_26343 = state_26253__$1;
(statearr_26281_26343[(1)] = (23));

} else {
var statearr_26282_26344 = state_26253__$1;
(statearr_26282_26344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (36))){
var state_26253__$1 = state_26253;
var statearr_26283_26345 = state_26253__$1;
(statearr_26283_26345[(2)] = null);

(statearr_26283_26345[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (29))){
var inst_26219 = (state_26253[(29)]);
var inst_26224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26219);
var inst_26225 = cljs.core.pr_str.call(null,inst_26224);
var inst_26226 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26225)].join('');
var inst_26227 = figwheel.client.utils.log.call(null,inst_26226);
var state_26253__$1 = state_26253;
var statearr_26284_26346 = state_26253__$1;
(statearr_26284_26346[(2)] = inst_26227);

(statearr_26284_26346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (6))){
var inst_26174 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26285_26347 = state_26253__$1;
(statearr_26285_26347[(2)] = inst_26174);

(statearr_26285_26347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (28))){
var inst_26219 = (state_26253[(29)]);
var inst_26218 = (state_26253[(2)]);
var inst_26219__$1 = cljs.core.get.call(null,inst_26218,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26220 = cljs.core.get.call(null,inst_26218,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26221 = cljs.core.get.call(null,inst_26218,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26222 = cljs.core.not_empty.call(null,inst_26219__$1);
var state_26253__$1 = (function (){var statearr_26286 = state_26253;
(statearr_26286[(29)] = inst_26219__$1);

(statearr_26286[(25)] = inst_26220);

(statearr_26286[(30)] = inst_26221);

return statearr_26286;
})();
if(cljs.core.truth_(inst_26222)){
var statearr_26287_26348 = state_26253__$1;
(statearr_26287_26348[(1)] = (29));

} else {
var statearr_26288_26349 = state_26253__$1;
(statearr_26288_26349[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (25))){
var inst_26251 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26253__$1,inst_26251);
} else {
if((state_val_26254 === (34))){
var inst_26221 = (state_26253[(30)]);
var inst_26239 = (state_26253[(2)]);
var inst_26240 = cljs.core.not_empty.call(null,inst_26221);
var state_26253__$1 = (function (){var statearr_26289 = state_26253;
(statearr_26289[(31)] = inst_26239);

return statearr_26289;
})();
if(cljs.core.truth_(inst_26240)){
var statearr_26290_26350 = state_26253__$1;
(statearr_26290_26350[(1)] = (35));

} else {
var statearr_26291_26351 = state_26253__$1;
(statearr_26291_26351[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (17))){
var inst_26179 = (state_26253[(23)]);
var state_26253__$1 = state_26253;
var statearr_26292_26352 = state_26253__$1;
(statearr_26292_26352[(2)] = inst_26179);

(statearr_26292_26352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (3))){
var state_26253__$1 = state_26253;
var statearr_26293_26353 = state_26253__$1;
(statearr_26293_26353[(2)] = null);

(statearr_26293_26353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (12))){
var inst_26170 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26294_26354 = state_26253__$1;
(statearr_26294_26354[(2)] = inst_26170);

(statearr_26294_26354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (2))){
var inst_26132 = (state_26253[(20)]);
var inst_26139 = cljs.core.seq.call(null,inst_26132);
var inst_26140 = inst_26139;
var inst_26141 = null;
var inst_26142 = (0);
var inst_26143 = (0);
var state_26253__$1 = (function (){var statearr_26295 = state_26253;
(statearr_26295[(7)] = inst_26142);

(statearr_26295[(8)] = inst_26143);

(statearr_26295[(9)] = inst_26140);

(statearr_26295[(10)] = inst_26141);

return statearr_26295;
})();
var statearr_26296_26355 = state_26253__$1;
(statearr_26296_26355[(2)] = null);

(statearr_26296_26355[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (23))){
var inst_26185 = (state_26253[(12)]);
var inst_26190 = (state_26253[(13)]);
var inst_26212 = (state_26253[(19)]);
var inst_26189 = (state_26253[(14)]);
var inst_26186 = (state_26253[(15)]);
var inst_26192 = (state_26253[(16)]);
var inst_26208 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26211 = (function (){var all_files = inst_26185;
var files_SINGLEQUOTE_ = inst_26186;
var res_SINGLEQUOTE_ = inst_26189;
var res = inst_26190;
var files_not_loaded = inst_26192;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26185,inst_26190,inst_26212,inst_26189,inst_26186,inst_26192,inst_26208,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (p__26210){
var map__26297 = p__26210;
var map__26297__$1 = ((cljs.core.seq_QMARK_.call(null,map__26297))?cljs.core.apply.call(null,cljs.core.hash_map,map__26297):map__26297);
var meta_data = cljs.core.get.call(null,map__26297__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26185,inst_26190,inst_26212,inst_26189,inst_26186,inst_26192,inst_26208,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
})();
var inst_26212__$1 = cljs.core.group_by.call(null,inst_26211,inst_26192);
var inst_26213 = cljs.core.seq_QMARK_.call(null,inst_26212__$1);
var state_26253__$1 = (function (){var statearr_26298 = state_26253;
(statearr_26298[(19)] = inst_26212__$1);

(statearr_26298[(32)] = inst_26208);

return statearr_26298;
})();
if(inst_26213){
var statearr_26299_26356 = state_26253__$1;
(statearr_26299_26356[(1)] = (26));

} else {
var statearr_26300_26357 = state_26253__$1;
(statearr_26300_26357[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (35))){
var inst_26221 = (state_26253[(30)]);
var inst_26242 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26221);
var inst_26243 = cljs.core.pr_str.call(null,inst_26242);
var inst_26244 = [cljs.core.str("not required: "),cljs.core.str(inst_26243)].join('');
var inst_26245 = figwheel.client.utils.log.call(null,inst_26244);
var state_26253__$1 = state_26253;
var statearr_26301_26358 = state_26253__$1;
(statearr_26301_26358[(2)] = inst_26245);

(statearr_26301_26358[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (19))){
var inst_26185 = (state_26253[(12)]);
var inst_26190 = (state_26253[(13)]);
var inst_26189 = (state_26253[(14)]);
var inst_26186 = (state_26253[(15)]);
var inst_26189__$1 = (state_26253[(2)]);
var inst_26190__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26189__$1);
var inst_26191 = (function (){var all_files = inst_26185;
var files_SINGLEQUOTE_ = inst_26186;
var res_SINGLEQUOTE_ = inst_26189__$1;
var res = inst_26190__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26185,inst_26190,inst_26189,inst_26186,inst_26189__$1,inst_26190__$1,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (p1__25923_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25923_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26185,inst_26190,inst_26189,inst_26186,inst_26189__$1,inst_26190__$1,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
})();
var inst_26192 = cljs.core.filter.call(null,inst_26191,inst_26189__$1);
var inst_26193 = cljs.core.not_empty.call(null,inst_26190__$1);
var state_26253__$1 = (function (){var statearr_26302 = state_26253;
(statearr_26302[(13)] = inst_26190__$1);

(statearr_26302[(14)] = inst_26189__$1);

(statearr_26302[(16)] = inst_26192);

return statearr_26302;
})();
if(cljs.core.truth_(inst_26193)){
var statearr_26303_26359 = state_26253__$1;
(statearr_26303_26359[(1)] = (20));

} else {
var statearr_26304_26360 = state_26253__$1;
(statearr_26304_26360[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (11))){
var state_26253__$1 = state_26253;
var statearr_26305_26361 = state_26253__$1;
(statearr_26305_26361[(2)] = null);

(statearr_26305_26361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (9))){
var inst_26172 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26306_26362 = state_26253__$1;
(statearr_26306_26362[(2)] = inst_26172);

(statearr_26306_26362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (5))){
var inst_26142 = (state_26253[(7)]);
var inst_26143 = (state_26253[(8)]);
var inst_26145 = (inst_26143 < inst_26142);
var inst_26146 = inst_26145;
var state_26253__$1 = state_26253;
if(cljs.core.truth_(inst_26146)){
var statearr_26307_26363 = state_26253__$1;
(statearr_26307_26363[(1)] = (7));

} else {
var statearr_26308_26364 = state_26253__$1;
(statearr_26308_26364[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (14))){
var inst_26153 = (state_26253[(27)]);
var inst_26162 = cljs.core.first.call(null,inst_26153);
var inst_26163 = figwheel.client.file_reloading.eval_body.call(null,inst_26162);
var inst_26164 = cljs.core.next.call(null,inst_26153);
var inst_26140 = inst_26164;
var inst_26141 = null;
var inst_26142 = (0);
var inst_26143 = (0);
var state_26253__$1 = (function (){var statearr_26309 = state_26253;
(statearr_26309[(7)] = inst_26142);

(statearr_26309[(8)] = inst_26143);

(statearr_26309[(9)] = inst_26140);

(statearr_26309[(10)] = inst_26141);

(statearr_26309[(33)] = inst_26163);

return statearr_26309;
})();
var statearr_26310_26365 = state_26253__$1;
(statearr_26310_26365[(2)] = null);

(statearr_26310_26365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (26))){
var inst_26212 = (state_26253[(19)]);
var inst_26215 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26212);
var state_26253__$1 = state_26253;
var statearr_26311_26366 = state_26253__$1;
(statearr_26311_26366[(2)] = inst_26215);

(statearr_26311_26366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (16))){
var inst_26179 = (state_26253[(23)]);
var inst_26181 = (function (){var all_files = inst_26179;
return ((function (all_files,inst_26179,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function (p1__25922_SHARP_){
return cljs.core.update_in.call(null,p1__25922_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26179,state_val_26254,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
})();
var inst_26182 = cljs.core.map.call(null,inst_26181,inst_26179);
var state_26253__$1 = state_26253;
var statearr_26312_26367 = state_26253__$1;
(statearr_26312_26367[(2)] = inst_26182);

(statearr_26312_26367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (30))){
var state_26253__$1 = state_26253;
var statearr_26313_26368 = state_26253__$1;
(statearr_26313_26368[(2)] = null);

(statearr_26313_26368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (10))){
var inst_26153 = (state_26253[(27)]);
var inst_26155 = cljs.core.chunked_seq_QMARK_.call(null,inst_26153);
var state_26253__$1 = state_26253;
if(inst_26155){
var statearr_26314_26369 = state_26253__$1;
(statearr_26314_26369[(1)] = (13));

} else {
var statearr_26315_26370 = state_26253__$1;
(statearr_26315_26370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (18))){
var inst_26185 = (state_26253[(12)]);
var inst_26186 = (state_26253[(15)]);
var inst_26185__$1 = (state_26253[(2)]);
var inst_26186__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26185__$1);
var inst_26187 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26186__$1);
var state_26253__$1 = (function (){var statearr_26316 = state_26253;
(statearr_26316[(12)] = inst_26185__$1);

(statearr_26316[(15)] = inst_26186__$1);

return statearr_26316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26253__$1,(19),inst_26187);
} else {
if((state_val_26254 === (37))){
var inst_26248 = (state_26253[(2)]);
var state_26253__$1 = state_26253;
var statearr_26317_26371 = state_26253__$1;
(statearr_26317_26371[(2)] = inst_26248);

(statearr_26317_26371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26254 === (8))){
var inst_26140 = (state_26253[(9)]);
var inst_26153 = (state_26253[(27)]);
var inst_26153__$1 = cljs.core.seq.call(null,inst_26140);
var state_26253__$1 = (function (){var statearr_26318 = state_26253;
(statearr_26318[(27)] = inst_26153__$1);

return statearr_26318;
})();
if(inst_26153__$1){
var statearr_26319_26372 = state_26253__$1;
(statearr_26319_26372[(1)] = (10));

} else {
var statearr_26320_26373 = state_26253__$1;
(statearr_26320_26373[(1)] = (11));

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
});})(c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
;
return ((function (switch__21033__auto__,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto____0 = (function (){
var statearr_26324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26324[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto__);

(statearr_26324[(1)] = (1));

return statearr_26324;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto____1 = (function (state_26253){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_26253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e26325){if((e26325 instanceof Object)){
var ex__21037__auto__ = e26325;
var statearr_26326_26374 = state_26253;
(statearr_26326_26374[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26375 = state_26253;
state_26253 = G__26375;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto__ = function(state_26253){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto____1.call(this,state_26253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
})();
var state__21097__auto__ = (function (){var statearr_26327 = f__21096__auto__.call(null);
(statearr_26327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto__);

return statearr_26327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto__,map__26127,map__26127__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26128,map__26128__$1,msg,files))
);

return c__21095__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26378,link){
var map__26380 = p__26378;
var map__26380__$1 = ((cljs.core.seq_QMARK_.call(null,map__26380))?cljs.core.apply.call(null,cljs.core.hash_map,map__26380):map__26380);
var file = cljs.core.get.call(null,map__26380__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__26380,map__26380__$1,file){
return (function (p1__26376_SHARP_,p2__26377_SHARP_){
if(cljs.core._EQ_.call(null,p1__26376_SHARP_,p2__26377_SHARP_)){
return p1__26376_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__26380,map__26380__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26384){
var map__26385 = p__26384;
var map__26385__$1 = ((cljs.core.seq_QMARK_.call(null,map__26385))?cljs.core.apply.call(null,cljs.core.hash_map,map__26385):map__26385);
var match_length = cljs.core.get.call(null,map__26385__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26385__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26381_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26381_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26387 = arguments.length;
switch (G__26387) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26389){
var map__26391 = p__26389;
var map__26391__$1 = ((cljs.core.seq_QMARK_.call(null,map__26391))?cljs.core.apply.call(null,cljs.core.hash_map,map__26391):map__26391);
var f_data = map__26391__$1;
var file = cljs.core.get.call(null,map__26391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__26391__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18085__auto__ = request_url;
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26392,files_msg){
var map__26414 = p__26392;
var map__26414__$1 = ((cljs.core.seq_QMARK_.call(null,map__26414))?cljs.core.apply.call(null,cljs.core.hash_map,map__26414):map__26414);
var opts = map__26414__$1;
var on_cssload = cljs.core.get.call(null,map__26414__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26415_26435 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26416_26436 = null;
var count__26417_26437 = (0);
var i__26418_26438 = (0);
while(true){
if((i__26418_26438 < count__26417_26437)){
var f_26439 = cljs.core._nth.call(null,chunk__26416_26436,i__26418_26438);
figwheel.client.file_reloading.reload_css_file.call(null,f_26439);

var G__26440 = seq__26415_26435;
var G__26441 = chunk__26416_26436;
var G__26442 = count__26417_26437;
var G__26443 = (i__26418_26438 + (1));
seq__26415_26435 = G__26440;
chunk__26416_26436 = G__26441;
count__26417_26437 = G__26442;
i__26418_26438 = G__26443;
continue;
} else {
var temp__4423__auto___26444 = cljs.core.seq.call(null,seq__26415_26435);
if(temp__4423__auto___26444){
var seq__26415_26445__$1 = temp__4423__auto___26444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26415_26445__$1)){
var c__18870__auto___26446 = cljs.core.chunk_first.call(null,seq__26415_26445__$1);
var G__26447 = cljs.core.chunk_rest.call(null,seq__26415_26445__$1);
var G__26448 = c__18870__auto___26446;
var G__26449 = cljs.core.count.call(null,c__18870__auto___26446);
var G__26450 = (0);
seq__26415_26435 = G__26447;
chunk__26416_26436 = G__26448;
count__26417_26437 = G__26449;
i__26418_26438 = G__26450;
continue;
} else {
var f_26451 = cljs.core.first.call(null,seq__26415_26445__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26451);

var G__26452 = cljs.core.next.call(null,seq__26415_26445__$1);
var G__26453 = null;
var G__26454 = (0);
var G__26455 = (0);
seq__26415_26435 = G__26452;
chunk__26416_26436 = G__26453;
count__26417_26437 = G__26454;
i__26418_26438 = G__26455;
continue;
}
} else {
}
}
break;
}

var c__21095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto__,map__26414,map__26414__$1,opts,on_cssload){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto__,map__26414,map__26414__$1,opts,on_cssload){
return (function (state_26425){
var state_val_26426 = (state_26425[(1)]);
if((state_val_26426 === (1))){
var inst_26419 = cljs.core.async.timeout.call(null,(100));
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(2),inst_26419);
} else {
if((state_val_26426 === (2))){
var inst_26421 = (state_26425[(2)]);
var inst_26422 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26423 = on_cssload.call(null,inst_26422);
var state_26425__$1 = (function (){var statearr_26427 = state_26425;
(statearr_26427[(7)] = inst_26421);

return statearr_26427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26425__$1,inst_26423);
} else {
return null;
}
}
});})(c__21095__auto__,map__26414,map__26414__$1,opts,on_cssload))
;
return ((function (switch__21033__auto__,c__21095__auto__,map__26414,map__26414__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto____0 = (function (){
var statearr_26431 = [null,null,null,null,null,null,null,null];
(statearr_26431[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto__);

(statearr_26431[(1)] = (1));

return statearr_26431;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto____1 = (function (state_26425){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_26425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e26432){if((e26432 instanceof Object)){
var ex__21037__auto__ = e26432;
var statearr_26433_26456 = state_26425;
(statearr_26433_26456[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26457 = state_26425;
state_26425 = G__26457;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto__ = function(state_26425){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto____1.call(this,state_26425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto__,map__26414,map__26414__$1,opts,on_cssload))
})();
var state__21097__auto__ = (function (){var statearr_26434 = f__21096__auto__.call(null);
(statearr_26434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto__);

return statearr_26434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto__,map__26414,map__26414__$1,opts,on_cssload))
);

return c__21095__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map