(ns snake.core)

(defn empty-board [width height]
  (-> (for [cols (range width)
            rows (range height)]
        [rows cols])
      (zipmap (repeat :empty))))

(def model {:board (empty-board 11 11)})

(def colors {:dark-grey "rgb(30,30,30)"
             :purple    "rgb(186,85,211"
             :green     "rgb(50,180,100)"
             :red       "rgb(244,116,114"
             :blue      "rgb(20,20,200"})

(def canvas (.item (.getElementsByTagName js/document "canvas")))
(def canvas-height (.-height canvas))
(def canvas-width (.-width canvas))

(defn clear-canvas [context]
  (.clearRect context 0 0 canvas-width canvas-height))

(defn fill-rect [context x y width height color]
  (set! context -fillStyle color) (.fillRect context x y width height))

(defn draw-cell [context [x y] cell-value]
  (fill-rect context (* x 40) (* y 40) (- 40 3) (- 40 3) (:green colors)))

(defn draw-board [context model]
  (doseq [[pos value] (:board model)]
    (draw-cell context pos value)))

(let [context (.getContext canvas "2d")]
  (clear-canvas context)
  (draw-board context model))