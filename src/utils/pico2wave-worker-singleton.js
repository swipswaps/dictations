/**
 * This singleton is made to prevent multiple times worker loading.
 */

const pico2waveWorker = new Worker(process.env.PUBLIC_URL + "/pico2wave/pico2wave-worker.js");

function pico2waveWorkerSingleton() {
  return pico2waveWorker;
}

export default pico2waveWorkerSingleton();
