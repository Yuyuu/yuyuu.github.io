# -*- coding: utf-8 -*-
import logging
import sys

from configuration import logging_configuration
from server import Server


formatter = logging.Formatter(logging_configuration[u'pattern'])
root_logger = logging.getLogger()
handler = root_logger.handlers[0] if root_logger.handlers else logging.StreamHandler()
handler.setFormatter(formatter)
handler.setLevel(logging_configuration[u'level'])
root_logger.addHandler(handler)
root_logger.setLevel(logging_configuration[u'level'])

server = Server()
