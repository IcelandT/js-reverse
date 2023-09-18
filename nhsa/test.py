import requests
import time

import execjs
from loguru import logger


class NHSA(object):
    def __init__(self) -> None:
        self.x_tif_signature_code = self.compile_js_code('x-tif-signature.js')
        self.time_stamp = str(self.get_time_stamp)

    @classmethod
    def compile_js_code(cls, js_file: str) -> any:
        return execjs.compile(cls.open_js_code(js_file))

    @staticmethod
    def open_js_code(js_file: str) -> any:
        with open(js_file, mode='r', encoding='utf8') as f:
            js = f.read()

        return js

    @property
    def get_time_stamp(self) -> int:
        timestamp = int(time.time())
        logger.debug(f'timestamp => {timestamp}')
        return timestamp

    @property
    def get_random_char(self) -> str:
        random_char = self.x_tif_signature_code.call('random_char')
        logger.debug(f'random_char => {random_char}')
        return random_char

    @property
    def f_char_splice(self) -> str:
        f_char = self.time_stamp + self.get_random_char + self.time_stamp
        logger.debug(f'f_char => {f_char}')
        return f_char

    def encrypt_x_tif_signature(self, f_char: str) -> str:
        x_tif_signature = self.x_tif_signature_code.call('encrypt_x_tif_signature', f_char)
        logger.debug(f'x-tif-signature => {x_tif_signature}')
        return x_tif_signature

    def main(self):
        f_char = self.f_char_splice
        x_tif_signature = self.encrypt_x_tif_signature(f_char)


if __name__ == '__main__':
    NHSA().main()