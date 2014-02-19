if(!lt.util.load.provided_QMARK_('lt.plugins.xyz')) {
goog.provide('lt.plugins.xyz');
goog.require('cljs.core');
cljs.core.list(new cljs.core.Keyword(null,"require-macros","require-macros",2638335745),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lt.plugins.abc","lt.plugins.abc",-1819591833,null),new cljs.core.Keyword(null,"refer","refer",1122295794),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"my-double-m","my-double-m",-614637013,null)], null)], null));
lt.plugins.xyz.my_triple_f = (function my_triple_f(x){return (x * 3);
});
lt.plugins.xyz.my_triple_f.call(null,3);
lt.plugins.xyz.ref_abc = (function ref_abc(){return lt.plugins.abc.my_double_f.call(null,3);
});
cljs.core.list(new cljs.core.Symbol(null,"my-double-m","my-double-m",-614637013,null),3);
}

//# sourceMappingURL=xyz_compiled.js.map