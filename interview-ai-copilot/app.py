import sounddevice as sd
from scipy.io.wavfile import write

fs = 48000
seconds = 10

print("Gravando áudio do sistema...")

recording = sd.rec(
    int(seconds * fs),
    samplerate=fs,
    channels=2,
    dtype='int16',
    device=18
)

sd.wait()

write("output.wav", fs, recording)

print("Áudio salvo!")