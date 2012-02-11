<?xml version='1.0' encoding='UTF-8'?>

	<!--
		* Licensed to the Apache Software Foundation (ASF) under one or more *
		contributor license agreements. See the NOTICE file distributed with *
		this work for additional information regarding copyright ownership. *
		The ASF licenses this file to You under the Apache License, Version
		2.0 * (the "License"); you may not use this file except in compliance
		with * the License. You may obtain a copy of the License at * *
		http://www.apache.org/licenses/LICENSE-2.0 * * Unless required by
		applicable law or agreed to in writing, software * distributed under
		the License is distributed on an "AS IS" BASIS, * WITHOUT WARRANTIES
		OR CONDITIONS OF ANY KIND, either express or implied. * See the
		License for the specific language governing permissions and *
		limitations under the License.
	-->

	<!-- 
  Simple transform of Solr query results to
 -->

<xsl:stylesheet version='1.0'
	xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>

	<xsl:output media-type="text/html; charset=UTF-8" encoding="UTF-8" />
	<xsl:template match='/'>
		<html>
			<head>
				<style type="text/css">
					body { font-family: Arial, sans; font-size: 0.8em}
				</style>
			</head>
			<body>
				<div id="result" style="margin-left:300px;">
				<xsl:apply-templates select="response/result/doc" />
				</div>
			</body>
			
		</html>
	</xsl:template>

	<!-- search results xslt -->
	<xsl:template match="doc">
			<div>
			<h3>
				<xsl:value-of select="str[@name='id']" />
			</h3>
			
			<p>
				<xsl:value-of select="str[@name='number']" />
			</p>
			<div>
				<xsl:value-of select="arr[@name='html']" />
			</div>			
			</div>
			<hr/>
	</xsl:template>
</xsl:stylesheet>