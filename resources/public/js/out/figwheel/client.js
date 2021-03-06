// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24740__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24741__i = 0, G__24741__a = new Array(arguments.length -  0);
while (G__24741__i < G__24741__a.length) {G__24741__a[G__24741__i] = arguments[G__24741__i + 0]; ++G__24741__i;}
  args = new cljs.core.IndexedSeq(G__24741__a,0);
} 
return G__24740__delegate.call(this,args);};
G__24740.cljs$lang$maxFixedArity = 0;
G__24740.cljs$lang$applyTo = (function (arglist__24742){
var args = cljs.core.seq(arglist__24742);
return G__24740__delegate(args);
});
G__24740.cljs$core$IFn$_invoke$arity$variadic = G__24740__delegate;
return G__24740;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24743){
var map__24745 = p__24743;
var map__24745__$1 = ((cljs.core.seq_QMARK_.call(null,map__24745))?cljs.core.apply.call(null,cljs.core.hash_map,map__24745):map__24745);
var message = cljs.core.get.call(null,map__24745__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24745__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18085__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18073__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18073__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18073__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21095__auto___24874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___24874,ch){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___24874,ch){
return (function (state_24848){
var state_val_24849 = (state_24848[(1)]);
if((state_val_24849 === (7))){
var inst_24844 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
var statearr_24850_24875 = state_24848__$1;
(statearr_24850_24875[(2)] = inst_24844);

(statearr_24850_24875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (1))){
var state_24848__$1 = state_24848;
var statearr_24851_24876 = state_24848__$1;
(statearr_24851_24876[(2)] = null);

(statearr_24851_24876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (4))){
var inst_24812 = (state_24848[(7)]);
var inst_24812__$1 = (state_24848[(2)]);
var state_24848__$1 = (function (){var statearr_24852 = state_24848;
(statearr_24852[(7)] = inst_24812__$1);

return statearr_24852;
})();
if(cljs.core.truth_(inst_24812__$1)){
var statearr_24853_24877 = state_24848__$1;
(statearr_24853_24877[(1)] = (5));

} else {
var statearr_24854_24878 = state_24848__$1;
(statearr_24854_24878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (13))){
var state_24848__$1 = state_24848;
var statearr_24855_24879 = state_24848__$1;
(statearr_24855_24879[(2)] = null);

(statearr_24855_24879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (6))){
var state_24848__$1 = state_24848;
var statearr_24856_24880 = state_24848__$1;
(statearr_24856_24880[(2)] = null);

(statearr_24856_24880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (3))){
var inst_24846 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24848__$1,inst_24846);
} else {
if((state_val_24849 === (12))){
var inst_24819 = (state_24848[(8)]);
var inst_24832 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24819);
var inst_24833 = cljs.core.first.call(null,inst_24832);
var inst_24834 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24833);
var inst_24835 = console.warn("Figwheel: Not loading code with warnings - ",inst_24834);
var state_24848__$1 = state_24848;
var statearr_24857_24881 = state_24848__$1;
(statearr_24857_24881[(2)] = inst_24835);

(statearr_24857_24881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (2))){
var state_24848__$1 = state_24848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24848__$1,(4),ch);
} else {
if((state_val_24849 === (11))){
var inst_24828 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
var statearr_24858_24882 = state_24848__$1;
(statearr_24858_24882[(2)] = inst_24828);

(statearr_24858_24882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (9))){
var inst_24818 = (state_24848[(9)]);
var inst_24830 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24818,opts);
var state_24848__$1 = state_24848;
if(cljs.core.truth_(inst_24830)){
var statearr_24859_24883 = state_24848__$1;
(statearr_24859_24883[(1)] = (12));

} else {
var statearr_24860_24884 = state_24848__$1;
(statearr_24860_24884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (5))){
var inst_24812 = (state_24848[(7)]);
var inst_24818 = (state_24848[(9)]);
var inst_24814 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24815 = (new cljs.core.PersistentArrayMap(null,2,inst_24814,null));
var inst_24816 = (new cljs.core.PersistentHashSet(null,inst_24815,null));
var inst_24817 = figwheel.client.focus_msgs.call(null,inst_24816,inst_24812);
var inst_24818__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24817);
var inst_24819 = cljs.core.first.call(null,inst_24817);
var inst_24820 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24818__$1,opts);
var state_24848__$1 = (function (){var statearr_24861 = state_24848;
(statearr_24861[(8)] = inst_24819);

(statearr_24861[(9)] = inst_24818__$1);

return statearr_24861;
})();
if(cljs.core.truth_(inst_24820)){
var statearr_24862_24885 = state_24848__$1;
(statearr_24862_24885[(1)] = (8));

} else {
var statearr_24863_24886 = state_24848__$1;
(statearr_24863_24886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (14))){
var inst_24838 = (state_24848[(2)]);
var state_24848__$1 = state_24848;
var statearr_24864_24887 = state_24848__$1;
(statearr_24864_24887[(2)] = inst_24838);

(statearr_24864_24887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (10))){
var inst_24840 = (state_24848[(2)]);
var state_24848__$1 = (function (){var statearr_24865 = state_24848;
(statearr_24865[(10)] = inst_24840);

return statearr_24865;
})();
var statearr_24866_24888 = state_24848__$1;
(statearr_24866_24888[(2)] = null);

(statearr_24866_24888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24849 === (8))){
var inst_24819 = (state_24848[(8)]);
var inst_24822 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24823 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24819);
var inst_24824 = cljs.core.async.timeout.call(null,(1000));
var inst_24825 = [inst_24823,inst_24824];
var inst_24826 = (new cljs.core.PersistentVector(null,2,(5),inst_24822,inst_24825,null));
var state_24848__$1 = state_24848;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24848__$1,(11),inst_24826);
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
});})(c__21095__auto___24874,ch))
;
return ((function (switch__21033__auto__,c__21095__auto___24874,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21034__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21034__auto____0 = (function (){
var statearr_24870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24870[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21034__auto__);

(statearr_24870[(1)] = (1));

return statearr_24870;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21034__auto____1 = (function (state_24848){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_24848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e24871){if((e24871 instanceof Object)){
var ex__21037__auto__ = e24871;
var statearr_24872_24889 = state_24848;
(statearr_24872_24889[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24890 = state_24848;
state_24848 = G__24890;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21034__auto__ = function(state_24848){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21034__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21034__auto____1.call(this,state_24848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21034__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21034__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___24874,ch))
})();
var state__21097__auto__ = (function (){var statearr_24873 = f__21096__auto__.call(null);
(statearr_24873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___24874);

return statearr_24873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___24874,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24891_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24891_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24898 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24898){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24896 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24897 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24896,_STAR_print_newline_STAR_24897,base_path_24898){
return (function() { 
var G__24899__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24900__i = 0, G__24900__a = new Array(arguments.length -  0);
while (G__24900__i < G__24900__a.length) {G__24900__a[G__24900__i] = arguments[G__24900__i + 0]; ++G__24900__i;}
  args = new cljs.core.IndexedSeq(G__24900__a,0);
} 
return G__24899__delegate.call(this,args);};
G__24899.cljs$lang$maxFixedArity = 0;
G__24899.cljs$lang$applyTo = (function (arglist__24901){
var args = cljs.core.seq(arglist__24901);
return G__24899__delegate(args);
});
G__24899.cljs$core$IFn$_invoke$arity$variadic = G__24899__delegate;
return G__24899;
})()
;})(_STAR_print_fn_STAR_24896,_STAR_print_newline_STAR_24897,base_path_24898))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24897;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24896;
}}catch (e24895){if((e24895 instanceof Error)){
var e = e24895;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24898], null));
} else {
var e = e24895;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24898))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24902){
var map__24907 = p__24902;
var map__24907__$1 = ((cljs.core.seq_QMARK_.call(null,map__24907))?cljs.core.apply.call(null,cljs.core.hash_map,map__24907):map__24907);
var opts = map__24907__$1;
var build_id = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24907,map__24907__$1,opts,build_id){
return (function (p__24908){
var vec__24909 = p__24908;
var map__24910 = cljs.core.nth.call(null,vec__24909,(0),null);
var map__24910__$1 = ((cljs.core.seq_QMARK_.call(null,map__24910))?cljs.core.apply.call(null,cljs.core.hash_map,map__24910):map__24910);
var msg = map__24910__$1;
var msg_name = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24909,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__24909,map__24910,map__24910__$1,msg,msg_name,_,map__24907,map__24907__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24909,map__24910,map__24910__$1,msg,msg_name,_,map__24907,map__24907__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24907,map__24907__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24914){
var vec__24915 = p__24914;
var map__24916 = cljs.core.nth.call(null,vec__24915,(0),null);
var map__24916__$1 = ((cljs.core.seq_QMARK_.call(null,map__24916))?cljs.core.apply.call(null,cljs.core.hash_map,map__24916):map__24916);
var msg = map__24916__$1;
var msg_name = cljs.core.get.call(null,map__24916__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24915,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24917){
var map__24925 = p__24917;
var map__24925__$1 = ((cljs.core.seq_QMARK_.call(null,map__24925))?cljs.core.apply.call(null,cljs.core.hash_map,map__24925):map__24925);
var on_compile_warning = cljs.core.get.call(null,map__24925__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24925__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24925,map__24925__$1,on_compile_warning,on_compile_fail){
return (function (p__24926){
var vec__24927 = p__24926;
var map__24928 = cljs.core.nth.call(null,vec__24927,(0),null);
var map__24928__$1 = ((cljs.core.seq_QMARK_.call(null,map__24928))?cljs.core.apply.call(null,cljs.core.hash_map,map__24928):map__24928);
var msg = map__24928__$1;
var msg_name = cljs.core.get.call(null,map__24928__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24927,(1));
var pred__24929 = cljs.core._EQ_;
var expr__24930 = msg_name;
if(cljs.core.truth_(pred__24929.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24930))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24929.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24930))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24925,map__24925__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto__,msg_hist,msg_names,msg){
return (function (state_25131){
var state_val_25132 = (state_25131[(1)]);
if((state_val_25132 === (7))){
var inst_25065 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25133_25174 = state_25131__$1;
(statearr_25133_25174[(2)] = inst_25065);

(statearr_25133_25174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (20))){
var inst_25093 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25131__$1 = state_25131;
if(cljs.core.truth_(inst_25093)){
var statearr_25134_25175 = state_25131__$1;
(statearr_25134_25175[(1)] = (22));

} else {
var statearr_25135_25176 = state_25131__$1;
(statearr_25135_25176[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (27))){
var inst_25105 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25106 = figwheel.client.heads_up.display_warning.call(null,inst_25105);
var state_25131__$1 = state_25131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(30),inst_25106);
} else {
if((state_val_25132 === (1))){
var inst_25053 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25131__$1 = state_25131;
if(cljs.core.truth_(inst_25053)){
var statearr_25136_25177 = state_25131__$1;
(statearr_25136_25177[(1)] = (2));

} else {
var statearr_25137_25178 = state_25131__$1;
(statearr_25137_25178[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (24))){
var inst_25121 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25138_25179 = state_25131__$1;
(statearr_25138_25179[(2)] = inst_25121);

(statearr_25138_25179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (4))){
var inst_25129 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25131__$1,inst_25129);
} else {
if((state_val_25132 === (15))){
var inst_25081 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25082 = figwheel.client.format_messages.call(null,inst_25081);
var inst_25083 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25084 = figwheel.client.heads_up.display_error.call(null,inst_25082,inst_25083);
var state_25131__$1 = state_25131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(18),inst_25084);
} else {
if((state_val_25132 === (21))){
var inst_25123 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25139_25180 = state_25131__$1;
(statearr_25139_25180[(2)] = inst_25123);

(statearr_25139_25180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (31))){
var inst_25112 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25131__$1 = state_25131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(34),inst_25112);
} else {
if((state_val_25132 === (32))){
var state_25131__$1 = state_25131;
var statearr_25140_25181 = state_25131__$1;
(statearr_25140_25181[(2)] = null);

(statearr_25140_25181[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (33))){
var inst_25117 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25141_25182 = state_25131__$1;
(statearr_25141_25182[(2)] = inst_25117);

(statearr_25141_25182[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (13))){
var inst_25071 = (state_25131[(2)]);
var inst_25072 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25073 = figwheel.client.format_messages.call(null,inst_25072);
var inst_25074 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25075 = figwheel.client.heads_up.display_error.call(null,inst_25073,inst_25074);
var state_25131__$1 = (function (){var statearr_25142 = state_25131;
(statearr_25142[(7)] = inst_25071);

return statearr_25142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(14),inst_25075);
} else {
if((state_val_25132 === (22))){
var inst_25095 = figwheel.client.heads_up.clear.call(null);
var state_25131__$1 = state_25131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(25),inst_25095);
} else {
if((state_val_25132 === (29))){
var inst_25119 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25143_25183 = state_25131__$1;
(statearr_25143_25183[(2)] = inst_25119);

(statearr_25143_25183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (6))){
var inst_25061 = figwheel.client.heads_up.clear.call(null);
var state_25131__$1 = state_25131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(9),inst_25061);
} else {
if((state_val_25132 === (28))){
var inst_25110 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25131__$1 = state_25131;
if(cljs.core.truth_(inst_25110)){
var statearr_25144_25184 = state_25131__$1;
(statearr_25144_25184[(1)] = (31));

} else {
var statearr_25145_25185 = state_25131__$1;
(statearr_25145_25185[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (25))){
var inst_25097 = (state_25131[(2)]);
var inst_25098 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25099 = figwheel.client.heads_up.display_warning.call(null,inst_25098);
var state_25131__$1 = (function (){var statearr_25146 = state_25131;
(statearr_25146[(8)] = inst_25097);

return statearr_25146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(26),inst_25099);
} else {
if((state_val_25132 === (34))){
var inst_25114 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25147_25186 = state_25131__$1;
(statearr_25147_25186[(2)] = inst_25114);

(statearr_25147_25186[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (17))){
var inst_25125 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25148_25187 = state_25131__$1;
(statearr_25148_25187[(2)] = inst_25125);

(statearr_25148_25187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (3))){
var inst_25067 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25131__$1 = state_25131;
if(cljs.core.truth_(inst_25067)){
var statearr_25149_25188 = state_25131__$1;
(statearr_25149_25188[(1)] = (10));

} else {
var statearr_25150_25189 = state_25131__$1;
(statearr_25150_25189[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (12))){
var inst_25127 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25151_25190 = state_25131__$1;
(statearr_25151_25190[(2)] = inst_25127);

(statearr_25151_25190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (2))){
var inst_25055 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25131__$1 = state_25131;
if(cljs.core.truth_(inst_25055)){
var statearr_25152_25191 = state_25131__$1;
(statearr_25152_25191[(1)] = (5));

} else {
var statearr_25153_25192 = state_25131__$1;
(statearr_25153_25192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (23))){
var inst_25103 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25131__$1 = state_25131;
if(cljs.core.truth_(inst_25103)){
var statearr_25154_25193 = state_25131__$1;
(statearr_25154_25193[(1)] = (27));

} else {
var statearr_25155_25194 = state_25131__$1;
(statearr_25155_25194[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (19))){
var inst_25090 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25091 = figwheel.client.heads_up.append_message.call(null,inst_25090);
var state_25131__$1 = state_25131;
var statearr_25156_25195 = state_25131__$1;
(statearr_25156_25195[(2)] = inst_25091);

(statearr_25156_25195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (11))){
var inst_25079 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25131__$1 = state_25131;
if(cljs.core.truth_(inst_25079)){
var statearr_25157_25196 = state_25131__$1;
(statearr_25157_25196[(1)] = (15));

} else {
var statearr_25158_25197 = state_25131__$1;
(statearr_25158_25197[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (9))){
var inst_25063 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25159_25198 = state_25131__$1;
(statearr_25159_25198[(2)] = inst_25063);

(statearr_25159_25198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (5))){
var inst_25057 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25131__$1 = state_25131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(8),inst_25057);
} else {
if((state_val_25132 === (14))){
var inst_25077 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25160_25199 = state_25131__$1;
(statearr_25160_25199[(2)] = inst_25077);

(statearr_25160_25199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (26))){
var inst_25101 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25161_25200 = state_25131__$1;
(statearr_25161_25200[(2)] = inst_25101);

(statearr_25161_25200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (16))){
var inst_25088 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25131__$1 = state_25131;
if(cljs.core.truth_(inst_25088)){
var statearr_25162_25201 = state_25131__$1;
(statearr_25162_25201[(1)] = (19));

} else {
var statearr_25163_25202 = state_25131__$1;
(statearr_25163_25202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (30))){
var inst_25108 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25164_25203 = state_25131__$1;
(statearr_25164_25203[(2)] = inst_25108);

(statearr_25164_25203[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (10))){
var inst_25069 = figwheel.client.heads_up.clear.call(null);
var state_25131__$1 = state_25131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(13),inst_25069);
} else {
if((state_val_25132 === (18))){
var inst_25086 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25165_25204 = state_25131__$1;
(statearr_25165_25204[(2)] = inst_25086);

(statearr_25165_25204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25132 === (8))){
var inst_25059 = (state_25131[(2)]);
var state_25131__$1 = state_25131;
var statearr_25166_25205 = state_25131__$1;
(statearr_25166_25205[(2)] = inst_25059);

(statearr_25166_25205[(1)] = (7));


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
});})(c__21095__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21033__auto__,c__21095__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto____0 = (function (){
var statearr_25170 = [null,null,null,null,null,null,null,null,null];
(statearr_25170[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto__);

(statearr_25170[(1)] = (1));

return statearr_25170;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto____1 = (function (state_25131){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_25131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e25171){if((e25171 instanceof Object)){
var ex__21037__auto__ = e25171;
var statearr_25172_25206 = state_25131;
(statearr_25172_25206[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25207 = state_25131;
state_25131 = G__25207;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto__ = function(state_25131){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto____1.call(this,state_25131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto__,msg_hist,msg_names,msg))
})();
var state__21097__auto__ = (function (){var statearr_25173 = f__21096__auto__.call(null);
(statearr_25173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto__);

return statearr_25173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto__,msg_hist,msg_names,msg))
);

return c__21095__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21095__auto___25270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto___25270,ch){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto___25270,ch){
return (function (state_25253){
var state_val_25254 = (state_25253[(1)]);
if((state_val_25254 === (1))){
var state_25253__$1 = state_25253;
var statearr_25255_25271 = state_25253__$1;
(statearr_25255_25271[(2)] = null);

(statearr_25255_25271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (2))){
var state_25253__$1 = state_25253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25253__$1,(4),ch);
} else {
if((state_val_25254 === (3))){
var inst_25251 = (state_25253[(2)]);
var state_25253__$1 = state_25253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25253__$1,inst_25251);
} else {
if((state_val_25254 === (4))){
var inst_25241 = (state_25253[(7)]);
var inst_25241__$1 = (state_25253[(2)]);
var state_25253__$1 = (function (){var statearr_25256 = state_25253;
(statearr_25256[(7)] = inst_25241__$1);

return statearr_25256;
})();
if(cljs.core.truth_(inst_25241__$1)){
var statearr_25257_25272 = state_25253__$1;
(statearr_25257_25272[(1)] = (5));

} else {
var statearr_25258_25273 = state_25253__$1;
(statearr_25258_25273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (5))){
var inst_25241 = (state_25253[(7)]);
var inst_25243 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25241);
var state_25253__$1 = state_25253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25253__$1,(8),inst_25243);
} else {
if((state_val_25254 === (6))){
var state_25253__$1 = state_25253;
var statearr_25259_25274 = state_25253__$1;
(statearr_25259_25274[(2)] = null);

(statearr_25259_25274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (7))){
var inst_25249 = (state_25253[(2)]);
var state_25253__$1 = state_25253;
var statearr_25260_25275 = state_25253__$1;
(statearr_25260_25275[(2)] = inst_25249);

(statearr_25260_25275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (8))){
var inst_25245 = (state_25253[(2)]);
var state_25253__$1 = (function (){var statearr_25261 = state_25253;
(statearr_25261[(8)] = inst_25245);

return statearr_25261;
})();
var statearr_25262_25276 = state_25253__$1;
(statearr_25262_25276[(2)] = null);

(statearr_25262_25276[(1)] = (2));


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
});})(c__21095__auto___25270,ch))
;
return ((function (switch__21033__auto__,c__21095__auto___25270,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21034__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21034__auto____0 = (function (){
var statearr_25266 = [null,null,null,null,null,null,null,null,null];
(statearr_25266[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21034__auto__);

(statearr_25266[(1)] = (1));

return statearr_25266;
});
var figwheel$client$heads_up_plugin_$_state_machine__21034__auto____1 = (function (state_25253){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_25253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e25267){if((e25267 instanceof Object)){
var ex__21037__auto__ = e25267;
var statearr_25268_25277 = state_25253;
(statearr_25268_25277[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25278 = state_25253;
state_25253 = G__25278;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21034__auto__ = function(state_25253){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21034__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21034__auto____1.call(this,state_25253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21034__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21034__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto___25270,ch))
})();
var state__21097__auto__ = (function (){var statearr_25269 = f__21096__auto__.call(null);
(statearr_25269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto___25270);

return statearr_25269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto___25270,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21095__auto__){
return (function (){
var f__21096__auto__ = (function (){var switch__21033__auto__ = ((function (c__21095__auto__){
return (function (state_25299){
var state_val_25300 = (state_25299[(1)]);
if((state_val_25300 === (1))){
var inst_25294 = cljs.core.async.timeout.call(null,(3000));
var state_25299__$1 = state_25299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25299__$1,(2),inst_25294);
} else {
if((state_val_25300 === (2))){
var inst_25296 = (state_25299[(2)]);
var inst_25297 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25299__$1 = (function (){var statearr_25301 = state_25299;
(statearr_25301[(7)] = inst_25296);

return statearr_25301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25299__$1,inst_25297);
} else {
return null;
}
}
});})(c__21095__auto__))
;
return ((function (switch__21033__auto__,c__21095__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21034__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21034__auto____0 = (function (){
var statearr_25305 = [null,null,null,null,null,null,null,null];
(statearr_25305[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21034__auto__);

(statearr_25305[(1)] = (1));

return statearr_25305;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21034__auto____1 = (function (state_25299){
while(true){
var ret_value__21035__auto__ = (function (){try{while(true){
var result__21036__auto__ = switch__21033__auto__.call(null,state_25299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21036__auto__;
}
break;
}
}catch (e25306){if((e25306 instanceof Object)){
var ex__21037__auto__ = e25306;
var statearr_25307_25309 = state_25299;
(statearr_25307_25309[(5)] = ex__21037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25310 = state_25299;
state_25299 = G__25310;
continue;
} else {
return ret_value__21035__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21034__auto__ = function(state_25299){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21034__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21034__auto____1.call(this,state_25299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21034__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21034__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21034__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21034__auto__;
})()
;})(switch__21033__auto__,c__21095__auto__))
})();
var state__21097__auto__ = (function (){var statearr_25308 = f__21096__auto__.call(null);
(statearr_25308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21095__auto__);

return statearr_25308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21097__auto__);
});})(c__21095__auto__))
);

return c__21095__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25311){
var map__25317 = p__25311;
var map__25317__$1 = ((cljs.core.seq_QMARK_.call(null,map__25317))?cljs.core.apply.call(null,cljs.core.hash_map,map__25317):map__25317);
var ed = map__25317__$1;
var formatted_exception = cljs.core.get.call(null,map__25317__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25317__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25317__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25318_25322 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25319_25323 = null;
var count__25320_25324 = (0);
var i__25321_25325 = (0);
while(true){
if((i__25321_25325 < count__25320_25324)){
var msg_25326 = cljs.core._nth.call(null,chunk__25319_25323,i__25321_25325);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25326);

var G__25327 = seq__25318_25322;
var G__25328 = chunk__25319_25323;
var G__25329 = count__25320_25324;
var G__25330 = (i__25321_25325 + (1));
seq__25318_25322 = G__25327;
chunk__25319_25323 = G__25328;
count__25320_25324 = G__25329;
i__25321_25325 = G__25330;
continue;
} else {
var temp__4423__auto___25331 = cljs.core.seq.call(null,seq__25318_25322);
if(temp__4423__auto___25331){
var seq__25318_25332__$1 = temp__4423__auto___25331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25318_25332__$1)){
var c__18870__auto___25333 = cljs.core.chunk_first.call(null,seq__25318_25332__$1);
var G__25334 = cljs.core.chunk_rest.call(null,seq__25318_25332__$1);
var G__25335 = c__18870__auto___25333;
var G__25336 = cljs.core.count.call(null,c__18870__auto___25333);
var G__25337 = (0);
seq__25318_25322 = G__25334;
chunk__25319_25323 = G__25335;
count__25320_25324 = G__25336;
i__25321_25325 = G__25337;
continue;
} else {
var msg_25338 = cljs.core.first.call(null,seq__25318_25332__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25338);

var G__25339 = cljs.core.next.call(null,seq__25318_25332__$1);
var G__25340 = null;
var G__25341 = (0);
var G__25342 = (0);
seq__25318_25322 = G__25339;
chunk__25319_25323 = G__25340;
count__25320_25324 = G__25341;
i__25321_25325 = G__25342;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25343){
var map__25345 = p__25343;
var map__25345__$1 = ((cljs.core.seq_QMARK_.call(null,map__25345))?cljs.core.apply.call(null,cljs.core.hash_map,map__25345):map__25345);
var w = map__25345__$1;
var message = cljs.core.get.call(null,map__25345__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18073__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18073__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18073__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25352 = cljs.core.seq.call(null,plugins);
var chunk__25353 = null;
var count__25354 = (0);
var i__25355 = (0);
while(true){
if((i__25355 < count__25354)){
var vec__25356 = cljs.core._nth.call(null,chunk__25353,i__25355);
var k = cljs.core.nth.call(null,vec__25356,(0),null);
var plugin = cljs.core.nth.call(null,vec__25356,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25358 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25352,chunk__25353,count__25354,i__25355,pl_25358,vec__25356,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25358.call(null,msg_hist);
});})(seq__25352,chunk__25353,count__25354,i__25355,pl_25358,vec__25356,k,plugin))
);
} else {
}

var G__25359 = seq__25352;
var G__25360 = chunk__25353;
var G__25361 = count__25354;
var G__25362 = (i__25355 + (1));
seq__25352 = G__25359;
chunk__25353 = G__25360;
count__25354 = G__25361;
i__25355 = G__25362;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25352);
if(temp__4423__auto__){
var seq__25352__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25352__$1)){
var c__18870__auto__ = cljs.core.chunk_first.call(null,seq__25352__$1);
var G__25363 = cljs.core.chunk_rest.call(null,seq__25352__$1);
var G__25364 = c__18870__auto__;
var G__25365 = cljs.core.count.call(null,c__18870__auto__);
var G__25366 = (0);
seq__25352 = G__25363;
chunk__25353 = G__25364;
count__25354 = G__25365;
i__25355 = G__25366;
continue;
} else {
var vec__25357 = cljs.core.first.call(null,seq__25352__$1);
var k = cljs.core.nth.call(null,vec__25357,(0),null);
var plugin = cljs.core.nth.call(null,vec__25357,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25367 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25352,chunk__25353,count__25354,i__25355,pl_25367,vec__25357,k,plugin,seq__25352__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25367.call(null,msg_hist);
});})(seq__25352,chunk__25353,count__25354,i__25355,pl_25367,vec__25357,k,plugin,seq__25352__$1,temp__4423__auto__))
);
} else {
}

var G__25368 = cljs.core.next.call(null,seq__25352__$1);
var G__25369 = null;
var G__25370 = (0);
var G__25371 = (0);
seq__25352 = G__25368;
chunk__25353 = G__25369;
count__25354 = G__25370;
i__25355 = G__25371;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25373 = arguments.length;
switch (G__25373) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19125__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19125__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25376){
var map__25377 = p__25376;
var map__25377__$1 = ((cljs.core.seq_QMARK_.call(null,map__25377))?cljs.core.apply.call(null,cljs.core.hash_map,map__25377):map__25377);
var opts = map__25377__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25375){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25375));
});

//# sourceMappingURL=client.js.map