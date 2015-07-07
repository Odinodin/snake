(ns snake.core)

(enable-console-print!)

(defn empty-board [width height]
  (-> (for [cols (range width)
            rows (range height)]
        [rows cols])
      (zipmap (repeat :empty))))

(def model {:board (empty-board 11 11)
            :snake [[0 0] [0 1] [0 2]]})

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
  (->>
    (cell-value {:snake :purple
                 :empty :green})
    colors
    (fill-rect context (* x 40) (* y 40) (- 40 3) (- 40 3))))

(defn draw-board [context board]
  (doseq [[pos value] board]
    (draw-cell context pos value)))

(defn compute-board [model]
  (reduce (fn [board snake-coord] (assoc board snake-coord :snake)) (:board model) (:snake model)))

(defn render [canvas board]
  (let [context (.getContext canvas "2d")]
    (clear-canvas context)
    (draw-board context board)))

(render canvas (compute-board model))