import pickle
import numpy as np

with open(r'Backend/project.pkl', 'rb') as file:
    loaded_model = pickle.load(file)

input_data = np.array([0.697457,0.302905,0.648900,0.451462,0.607668,0.375004,0.721731,0.478890,0.302440,0.602579]).reshape(1, -1)

# Use the loaded model to make predictions
predictions = loaded_model.predict(input_data)
predictions