# Digital Vulnerability Management Platform (DVMP)
## Platform Documentation for SRE Team

**Overview**

Digital Vunerability Management is a single pane of glass for all vulnerability data. It is built on CodeDX to centralize and manage vulnerabilities across the software development lifecycle into one place. It is integrated with GitHub and multiple security tools (SAST, DAST, SCA, Secrets Detection-Trufflehog, penetration testing, and code-signing).
Security Engineers triage vulnerabilities following the Risk remediation process.

**Prerequisites**

- Onbaord and have access to Digital Vulnerability  Platform.
- Jira integration enabled for issue creation.
- Github integration enabled
- Code Repositories mapped 
- CodeDX access enabled 

## 2. Key Components and Processes 

### 2.1 Repository Gating and Ownership Mapping**

**Concept**

Repo gating ensures that important metafiles/root files are always up to date. This prevents risky merges and ensures every repo has complete metadata.
***Reference***: [See detailed steps in 3.1 Repo Gating and Managing Metafiles](#31-repo-gating-and-managing-metafiles)

### 2.2 Repository Lifecycle Management (Archive & Delete)

**Concept**

This keeps the codebase lean and removes unused, vulnerable repositories.
- ***Archive***: Repos stale for 30+ days are archived.
- ***Delete***: Archived repos not reused for 90+ days trigger a owner notification.If not reclaimed, repos are deleted.

### 2.3 Secrets Management with Trufflehog
  
**Concept**

Trufflehog scans for hardcoded secrets (API keys, Private keys, AWS secret keys, passwords).
 Every code change triggers a scan. Secrets are flagged as Critical and must be remediated immediately.
***Reference***: [See detailed steps in 3.2 Trufflehog – How to Delete and Rotate Keys](#32-trufflehog--how-to-delete-and-rotate-keys)
 
 ### 2.4 Risk Exception process

 **Concept**
 
 Vulnerabilities not remediated within SLA timelines are evaluated through Technical Risk Acceptance (TRA) process.
 Engineers submit:
- ***Technical justifications***
- ***Business justifications***
- ***Potential Remediation Date***

***Reference***: [See detailed steps in 3.3 TRA request - Risk Exception Process](#33-tra-request---risk-exception-process)

### 2.5 Vulnerability Remediation Standards(SLA)

| Risk Score | SLA for Remediation |
| :----------|------------------:|
| Critical   |  3-7 days        |
| High       |  7-30 days       |
| Medium     |  30-90 days      |
| Low        |  365 days         |

## 3. 🔧 Technical Guides 

### 3.1 Repo Gating and Managing Metafiles

Steps for Developers:
1. Attempt a merge.
2. If metafiles/root files are missing or outdated, the system triggers a popup.
3. Popup provides a link to Word template (owned by SRE Team).
4. Fill in:
  - Repo owner
  - Repo Contributors 
  - Technical Manager
  - Business Unit 
  - Project description
  - Commit message
  - Security contact info
5. Upload updated metafile into the repository.
6. Retry merge → merge proceeds if validation passes.

### 3.2 Trufflehog – How to Delete and Rotate Keys 

Steps to Remediate Exposed Secrets:
Identify the secret flagged in the scan report.
1. Delete the key from the codebase immediately.
2. Rotate the key in the respective system (e.g., AWS IAM, API provider).
3. Commit changes ensuring no secret remains in version history.
4. Re-run the Trufflehog scan to verify no further leaks exist.
5. Close the Jira ticket once validated.


## 3.3 TRA request - Risk Exception Process

1. TRA request is sent to Risk owner.
2. Engineers submit TRA request with technical and business justification.
3. Security team evaluates and, if approved, moves risk to the Risk Registry.
4. Severity may be downgraded if impact/exploitability is low.
5. Each exception has an expiry date for remediation. 
6. Risk must be remediated within the expiry date.


## 🎯 Things to Practice 
- Always scan commits locally before pushing code.
- Rotate secrets immediately,never reuse compromised keys.
- Store the secrets in organization approved Vaults (eg,. HashiCorp)
- Keep metafiles updated with every repository change.
- Review archival notifications to prevent accidental deletions.
- Track risk exceptions closely,downgrades are temporary, not permanent.

## 🧠Things You know

- TRA permanently closes a vulnerability without remediation 
[ ] YES  [ ] NO
- Delete and rotate the key is the correct way to handle a secret flagged by Trufflehog?
[ ] YES  [ ] NO
- Repos are deleted immediately after 90 days of inactivity.
[ ] YES  [ ] NO
- If metafiles are missing during a merge, merge continues as normal.
[ ] YES  [ ] NO
- DVMP automatically assigns every vulnerability to the Security team only.
[ ] YES  [ ] NO
- 15 days is the SLA for a High vulnerability.
[ ] YES  [ ] NO