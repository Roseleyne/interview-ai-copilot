import sounddevice as sd
from scipy.io.wavfile import write

fs = 44100
seconds = 10

print("Gravando áudio do sistema...")

recording = sd.rec(
    int(seconds * fs),
    samplerate=fs,
    channels=2,
    dtype='int16',
    device=2
)

sd.wait()

write("output.wav", fs, recording)

print("Áudio salvo!")