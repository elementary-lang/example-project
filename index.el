<import as="h" from="hyperscript" />
<function name="h1" data>
  <js>h('h1', data)</js>
</function>

<function name="h1" data>
  <js>h('h1', data)</js>
</function>

<function name="render" data>
  <js>
    document.body.appendChild(data)
  </js>
</function>

<render>
  <h1><js>"Hello World"</js></h1>;
  <p><js>"FooBar"</js></p>
</render>
