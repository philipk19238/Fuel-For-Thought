from Naked.toolshed.shell import execute_js

args = 'static/hedera/makeFile.js' + ' please work'
print("makefile")
res = execute_js(args)
print("res =", res)
if success:
    print("success")
else:
    print("error")
