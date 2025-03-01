# Makefile for building and serving MkDocs documentation

.PHONY: build serve

build:
	mkdocs build

serve:
	mkdocs serve