import pickle
import numpy as np

def model(o, c, e, a, n):
    class_vector = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    pt = [o, c, e, a, n]
    model = pickle.load(open("model.sav", "rb"))
    pred = model.predict(np.array(pt).reshape(1, -1))
    idx = class_vector.index(list(pred[0]))
    return "Type " + str(idx + 1)
