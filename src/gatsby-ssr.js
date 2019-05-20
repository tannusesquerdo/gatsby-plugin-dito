import React from "react"
import { stripIndent } from "common-tags"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const { apiKey, domain } = pluginOptions

  // ensures Dito api key is present
  if (!apiKey || apiKey.length < 10) console.error("Dito apiKey is invalid.")

  if (apiKey) {
    setPostBodyComponents([
      <script
        key="plugin-dito"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
          !function(t,e,i){window.dito={},window._ditoTemp=[],dito.generateID=function(t){return"_dito_sha1_"+t};var n=["init","identify","alias","unalias","track"],o=t.createElement("script"),a=t.getElementsByTagName("script")[0];o.type="text/javascript",o.async=!0,o.id="dito-jssdk",o.src="//storage.googleapis.com/dito/sdk.js",a.parentNode.insertBefore(o,a);for(var r=0;r<n.length;r++)dito[n[r]]=function(t){return function(){_ditoTemp.push({methodName:n[t],params:arguments})}}(r)}(document);

          dito.init({
            apiKey: '${apiKey}',
            domain: '${domain}'
          });`,
        }}
      />,
    ])
  }
}
