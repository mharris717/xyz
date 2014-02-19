(ns lt.plugins.xyz)

'(:require-macros [lt.plugins.abc :refer [my-double-m]])

(defn my-triple-f [x] (* x 3))
(my-triple-f 3)

(lt.plugins.abc/my-double-f 3)
