#!/usr/bin/python3
def is_same_class(obj, a_class):
    """Function that returns True if the object is exactly an instance of the
    specified class ; otherwise False.
    """
    if isinstance(obj, a_class) and issubclass(a_class, type(obj)):
        return True
    else:
        return False
