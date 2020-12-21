---
title: Python Dependency Injection Frameworks
tags: ['Python', 'Dependency Injection']
sources: 
    - title: Inversion of Control Containers and the Dependency Injection pattern by Martin Fowler
      url: https://martinfowler.com/articles/injection.html#InversionOfControl
    - title: Dependency Injection by Jakob Jenkov
      url: http://tutorials.jenkov.com/dependency-injection/index.html
    - title: Dependency Injection on Wikipedia
      url: https://en.wikipedia.org/wiki/Dependency_injection
date: 2020-01-26
category: Python
feature_image:
---

Even though the usage of Dependency Injection is not as common in the Python community as it is in the C# or Java communities,
it is still a very powerful way to implement the {% post_link solid-dependency-inversion-principle 'Dependency Inversion Principle' %}.
Thankfully there are several packages available to us that provide us with a dependency injection implementation,
which I will discuss in this article.

<!-- more -->

Dependency injection is a style of object configuration in which an objects fields and collaborators are set by an external entity.
In other words objects are configured by some other object.
When you are using Dependency injection an object is no longer responsible for configuring itself.
This is taken care of by the container instead. This might be a bit abstract so let's start with a simple example:

## Simple dependency injection example

```python
import imaplib


class EmailClient:
    def receive(self, username: str, password: str) -> List[str]:
        server = imaplib.IMAP4('localhost', 993)
        server.login(username, password)
        server.select('INBOX')
    
        result, data = server.uid('search', None)

        # Process result and data
```

In this example we have an `EmailClient` that uses `imaplib` to receive email messages.
The problem we have here is the fact we hardwired `imaplib.IMAP4` into the email client
so we cannot use another protocol like `IMAP_SSL`.

We can solve this with dependency injection. For this we make use of Pythons duck typing.
First we create a [Protocols](https://mypy.readthedocs.io/en/stable/protocols.html#simple-user-defined-protocols)
we can use to define what we expect.

```python
from typing_extensions import Protocol

class EmailReceiver(Protocol):
    def login(self, user: str, password: str): ...
    def select(self, mailbox='INBOX', readonly=False): ...
    def uid(self, command, *args): ...
```

Next we change the EmailClient so it takes a `ReceivingEmailProtocol` and uses that to connect

```python
class EmailClient:
    def __init__(self, email_receiver: EmailReceiver):
        self.server = email_receiver

    def receive(self, username: str, password: str) -> List[str]:
        self.server.login(username, password)
        self.server.select('INBOX')

        result, data = self.server.uid('search', None)

        # Process result and data
```

Lastly we create a new instance for the email receiver and start receiving email

```python
receiver: EmailReceiver = imaplib.IMAP4_SSL("localhost", 993)
client = EmailClient(receiver)
results = client.receive("codingwithjohan@gmail.com", "mysupersecretpasswd")
```

As you can see, in this case we are using the `IMAP4_SSL` instead of just `IMAP`
without having to change the `EmailClient`.

## Why would you need a dependency injection framework?

If you've been researching Dependency Injection frameworks for python, you've no doubt come across this opinion:

> You dont need Dependency Injection in python. You can just use duck typing and monkey patching!

The position behind this statement is often that you only need Dependency Injection in statically typed languages.

To be honest, you don't really _need_ Dependency Injection in any language, whether it is statically typed or not.
Dependency Injection can make you life a lot easier though when building large applications.
In my experience monkey patching should be kept to a minimum. I only use it in my tests, for example when I create mocks.

## Python dependency injection frameworks comparison

This chapter compares dependency injection frameworks for Python.

I have limited my research to dependency injection frameworks that are still maintained and have a decent number of users.
I also did not include any examples because each framework already provides very good examples.

### Dependency Injector

Dependency Injector is a dependency injection microframework for Python created by ETS Labs.
It was designed to be a unified and developer-friendly tool that helps implement
a dependency injection design pattern in a formal, pretty, and Pythonic way.

{% procon %}
+ Very flexible
+ Factory Providers that creates a new instance on each call
+ Singleton Providers  that creates a new instance on the first call and returns that same instance every next call
+ Allows clients of your library to inject dependencies
+ Doesn't interfere with your existing code
- Doesn't use static type checking
- No smart binding, which means you have to configure everything by hand
{% endprocon %}


### Pinject

Pinject is a dependency injection container for Python created by Google.
It's primary goal is to help developers assemble objects into graphs in an easy, maintainable way.

{% procon %}
+ Uses implicit bindings for classes by default...
+ ... and has many configuration options
+ Auto copying args to fields with decorators
+ Binding specs for more complex bindings
+ Binding specs for more complex bindings
+ Defaults to Singleton scope which creates a new object on the first call and reuses it after that ...
+ ... and it also supports Prototype scope which instantiates a new object on each call ...
+ ... and you can create your own custom scopes
+ Possible to do partial injections.
+ No separate config file.
- Doesn\'t use static type checking.
- Some features require the use of decorators, which couples Pinject to your application.
{% endprocon %}

### Injector

Python dependency injection framework, inspired by Guice which aims for simplicity, doesn't use a global state and uses static type checking.

{% procon %}
+ Uses static type checking to resolve dependencies
+ Very simple to configure
+ Supports dataclasses
+ Helpers for testing
+ Creates a new object on each call by default ...
+ ... and you can use `@singleton` ...
+ ... and you can create your own scopes
- It looks like it forces the use of decorators, which couples Injector heavily to your application
{% endprocon %}

### Python Inject

Dependency injection the python way, the good way. Not a port of Guice or Spring.

{% procon %}
+ Uses static type checking to resolve dependencies
+ Very simple to configure
+ Integrates with Django
+ Partial injection
+ Helpers for testing
+ Binding of simple keys. (e.g. name and email)
- Python Inject is coupled heavily into your application
{% endprocon %}
