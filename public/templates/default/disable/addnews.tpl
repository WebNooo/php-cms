<link rel="stylesheet" type="text/css" href="engine/skins/chosen/chosen.css"/>
<script type="text/javascript" src="engine/skins/chosen/chosen.js"></script>
<script type="text/javascript">
$(function(){
	$('#category').chosen({allow_single_deselect:true, no_results_text: '������ �� �������'});
});
</script>
<article class="short-story">
<div class="short-left"><h1>�������� �������</h1></div><br>    
<div class="baseform">	
	<table class="tableform">
		<tr>
			<td class="label">
				���������:<span class="impot">*</span>
			</td>
			<td><input type="text" id="title" name="title" value="{title}" maxlength="150" class="f_input" />&nbsp;<input class="bbcodes" style="height: 22px; font-size: 11px;" title="��������� ����������� ������ ��� �����������" onclick="find_relates(); return false;" type="button" value="����� �������" /><span id="related_news"></span></td>
		</tr>
	[urltag]
		<tr>
			<td class="label"><br>URL ������:</td>
			<td><br><input type="text" name="alt_name" value="{alt-name}" maxlength="150" class="f_input" /></td>
		</tr>
	[/urltag]
		<tr>
			<td class="label">
				<br>���������:<span class="impot">*</span>
			</td>
			<td><br>{category}</td>
		</tr>
		<tr>
			<td class="label">&nbsp;</td>
			<td><a href="#" onclick="$('.addvote').toggle();return false;"><br>�������� �����</a></td>
		</tr>
		<tr  class="addvote" style="display:none;" >
			<td class="label"><br>��������� ������:</td>
			<td><br><input type="text" name="vote_title" value="{votetitle}" maxlength="150" class="f_input" /></td>
		</tr>
		<tr  class="addvote" style="display:none;" >
			<td class="label"><br>������:</td>
			<td><br><input type="text" name="frage" value="{frage}" maxlength="150" class="f_input" /></td>
		</tr>
		<tr  class="addvote" style="display:none;" >
			<td class="label"><br>�������� �������:<br /><br />������ ����� ������ �������� ����� ��������� ������</td>
			<td><br><textarea name="vote_body" rows="10" class="f_textarea" >{votebody}</textarea><br /><input type="checkbox" name="allow_m_vote" value="1" {allowmvote}> ��������� ����� ���������� ���������</td>
		</tr>
		<tr>
			<td colspan="2">
				<b><br>������� �����: <span class="impot">*</span></b> (�����������)
				[not-wysywyg]
                <div class="bb-editor" style="width:95%;">
					<br>{bbcode}
					<textarea name="short_story" id="short_story" onfocus="setFieldName(this.name)" rows="15" class="f_textarea" >{short-story}</textarea>
				</div>
				[/not-wysywyg]
				{shortarea}
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<b><br>��������� �����:</b> (�������������)
				[not-wysywyg]
				<div class="bb-editor" style="width:95%;">
					<br>{bbcode}
					<textarea name="full_story" id="full_story" onfocus="setFieldName(this.name)" rows="20" class="f_textarea" >{full-story}</textarea>
				</div>
				[/not-wysywyg]
				{fullarea}
			</td>
		</tr>
		{xfields}
		<tr>
			<td class="label"><br>�������� ����� ��� ������ �����:</td>
			<td><br><input type="text" name="tags" id="tags" value="{tags}" maxlength="150"  class="f_input" autocomplete="off" /></td>
		</tr>
		[question]
		<tr>
			<td class="label">
				<br>������:
			</td>
			<td>
				<div><br>{question}</div>
			</td>
		</tr>
		<tr>
			<td class="label">
				<br>�����:<span class="impot">*</span>
			</td>
			<td>
				<div><br><input type="text" name="question_answer" class="f_input" /></div>
			</td>
		</tr>
		[/question]
		[sec_code]
		<tr>
			<td class="label">
				<br>������� ���<br />� ��������:<span class="impot">*</span>
			</td>
			<td>
				<div><br>{sec_code}</div>
				<div><br><input type="text" name="sec_code" id="sec_code" style="width:115px" class="f_input" /></div>
			</td>
		</tr>
		[/sec_code]
		[recaptcha]
		<tr>
			<td class="label">
				<br>������� ��� �����,<br />���������� �� �����������:<span class="impot">*</span>
			</td>
			<td>
				<div><br>{recaptcha}</div>
			</td>
		</tr>
		[/recaptcha]
		<tr>
			<td colspan="2"><br>{admintag}</td>
		</tr>
	</table>
	<div class="fieldsubmit">
		<br><button class="sendreg" name="add" type="submit">���������</button>
	</div>
</div>
</article>    