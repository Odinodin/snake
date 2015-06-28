(defproject snake "0.0.1"
            :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                           [org.clojure/clojurescript "0.0-3308"]
                           [figwheel "0.3.3"]]

            :plugins [[lein-cljsbuild "1.0.5"]
                      [lein-figwheel "0.3.3"]]

            :cljsbuild {
                        :builds [{:id           "dev"
                                  :source-paths ["src/snake"]

                                  :figwheel true

                                  :compiler     {:main          "snake.core"
                                                 :asset-path    "js/out"
                                                 :output-to     "resources/public/js/snake.js"
                                                 :output-dir    "resources/public/js/out"
                                                 :optimizations :none
                                                 :source-map    true
                                                 :pretty-print  true}
                                  }]}
            :figwheel {
                       :http-server-root "public"
                       :server-port 3449
                       :css-dirs ["resources/public/css"]
                       :nrepl-port  7888})
