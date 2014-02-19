(ns lt.plugins.xyz)

; errors if you add this to namespace
'(:require-macros [lt.plugins.abc :refer [my-double-m]])

(defn my-triple-f [x] (* x 3))
(my-triple-f 3)

(defn ref-abc []
  (lt.plugins.abc/my-double-f 3))
