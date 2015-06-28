// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25747_25759 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25748_25760 = null;
var count__25749_25761 = (0);
var i__25750_25762 = (0);
while(true){
if((i__25750_25762 < count__25749_25761)){
var f_25763 = cljs.core._nth.call(null,chunk__25748_25760,i__25750_25762);
cljs.core.println.call(null,"  ",f_25763);

var G__25764 = seq__25747_25759;
var G__25765 = chunk__25748_25760;
var G__25766 = count__25749_25761;
var G__25767 = (i__25750_25762 + (1));
seq__25747_25759 = G__25764;
chunk__25748_25760 = G__25765;
count__25749_25761 = G__25766;
i__25750_25762 = G__25767;
continue;
} else {
var temp__4423__auto___25768 = cljs.core.seq.call(null,seq__25747_25759);
if(temp__4423__auto___25768){
var seq__25747_25769__$1 = temp__4423__auto___25768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25747_25769__$1)){
var c__18870__auto___25770 = cljs.core.chunk_first.call(null,seq__25747_25769__$1);
var G__25771 = cljs.core.chunk_rest.call(null,seq__25747_25769__$1);
var G__25772 = c__18870__auto___25770;
var G__25773 = cljs.core.count.call(null,c__18870__auto___25770);
var G__25774 = (0);
seq__25747_25759 = G__25771;
chunk__25748_25760 = G__25772;
count__25749_25761 = G__25773;
i__25750_25762 = G__25774;
continue;
} else {
var f_25775 = cljs.core.first.call(null,seq__25747_25769__$1);
cljs.core.println.call(null,"  ",f_25775);

var G__25776 = cljs.core.next.call(null,seq__25747_25769__$1);
var G__25777 = null;
var G__25778 = (0);
var G__25779 = (0);
seq__25747_25759 = G__25776;
chunk__25748_25760 = G__25777;
count__25749_25761 = G__25778;
i__25750_25762 = G__25779;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25780 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18085__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18085__auto__)){
return or__18085__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25780);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25780)))?cljs.core.second.call(null,arglists_25780):arglists_25780));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25751 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25752 = null;
var count__25753 = (0);
var i__25754 = (0);
while(true){
if((i__25754 < count__25753)){
var vec__25755 = cljs.core._nth.call(null,chunk__25752,i__25754);
var name = cljs.core.nth.call(null,vec__25755,(0),null);
var map__25756 = cljs.core.nth.call(null,vec__25755,(1),null);
var map__25756__$1 = ((cljs.core.seq_QMARK_.call(null,map__25756))?cljs.core.apply.call(null,cljs.core.hash_map,map__25756):map__25756);
var doc = cljs.core.get.call(null,map__25756__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25756__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25781 = seq__25751;
var G__25782 = chunk__25752;
var G__25783 = count__25753;
var G__25784 = (i__25754 + (1));
seq__25751 = G__25781;
chunk__25752 = G__25782;
count__25753 = G__25783;
i__25754 = G__25784;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25751);
if(temp__4423__auto__){
var seq__25751__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25751__$1)){
var c__18870__auto__ = cljs.core.chunk_first.call(null,seq__25751__$1);
var G__25785 = cljs.core.chunk_rest.call(null,seq__25751__$1);
var G__25786 = c__18870__auto__;
var G__25787 = cljs.core.count.call(null,c__18870__auto__);
var G__25788 = (0);
seq__25751 = G__25785;
chunk__25752 = G__25786;
count__25753 = G__25787;
i__25754 = G__25788;
continue;
} else {
var vec__25757 = cljs.core.first.call(null,seq__25751__$1);
var name = cljs.core.nth.call(null,vec__25757,(0),null);
var map__25758 = cljs.core.nth.call(null,vec__25757,(1),null);
var map__25758__$1 = ((cljs.core.seq_QMARK_.call(null,map__25758))?cljs.core.apply.call(null,cljs.core.hash_map,map__25758):map__25758);
var doc = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25758__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25789 = cljs.core.next.call(null,seq__25751__$1);
var G__25790 = null;
var G__25791 = (0);
var G__25792 = (0);
seq__25751 = G__25789;
chunk__25752 = G__25790;
count__25753 = G__25791;
i__25754 = G__25792;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map